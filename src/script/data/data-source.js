import { async } from "regenerator-runtime";
import clubs from "./clubs.js";
class DataSource_off {
  static searchClub = function (keyword) {
    return new Promise((success, fail) => {
      const filteredClubs = clubs.filter((club) =>
        club.name.toUpperCase().includes(keyword.toUpperCase())
      );

      if (filteredClubs.length) {
        success(filteredClubs);
      } else {
        fail(`${keyword} is not found`);
      }
    });
  };
}

function detailUser(username) {
  // Create new XMLHttpRequest object
  const xhr = new XMLHttpRequest();

  // GitHub endpoint, dynamically passing in specified username
  const url = `https://api.github.com/users/${username}`;
  // Open a new connection, using a GET request via URL endpoint
  // Providing 3 arguments (GET/POST, The URL, Async True/False)
  xhr.open("GET", url, true);
  // When request is received
  // Process it here

  xhr.setRequestHeader(
    "Authorization",
    "token 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"
  );
  xhr.onload = function () {
    // Parse API data into JSON
    const data = JSON.parse(this.response);
    // Log the response
    // console.log(data);
  };
  // Send the request to the server
  xhr.send();
}

class DataSource {
  static searchClub = async (keyword) => {
    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=${keyword}`
      );
      let result = [];
      const responseJSON = await response.json();
      if (responseJSON.total_count > 0) {
        const items = responseJSON.items;
        items.forEach(async (el) => {
          const res = await fetch(`https://api.github.com/users/${el.login}`, {
            headers: {
              Authorization: "token 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",
            },
          });
          const resj = await res.json();
          result.push(resj);
        });
        console.log(result);
        // console.log(items);
        return result;
      } else {
        return `${keyword} tidak ditemukan!`;
      }
    } catch (error) {
      ("Cek koneksi internet");
    }
  };
}
export default DataSource;

// function DataSource(onSuccess, onFailed) {
//   this.onSuccess = onSuccess;
//   this.onFailed = onFailed;
// }

// // DataSource.prototype.searchClub = function (keyword) {
// //   const filteredClubs = clubs.filter(function (club) {
// //     return club.name.toUpperCase().includes(keyword.toUpperCase());
// //   });

// //   if (filteredClubs.length) {
// //     this.onSuccess(filteredClubs);
// //   } else {
// //     this.onFailed(`${keyword} is not found`);
// //   }
// // };
// DataSource.prototype.searchClub = function (keyword) {
//   const filteredClubs = clubs.filter((club) =>
//     club.name.toUpperCase().includes(keyword.toUpperCase())
//   );

//   if (filteredClubs.length) {
//     this.onSuccess(filteredClubs);
//   } else {
//     this.onFailed(`${keyword} is not found`);
//   }
// };
