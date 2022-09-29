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
class DataSource {
  static searchClub = (keyword) => {
    return fetch(`https://api.github.com/search/users?q=${keyword}`)
      .then((response) => {
        // console.log(response.json());
        return response.json();
      })
      .then((responseJSON) => {
        // console.log(responseJSON);
        if (responseJSON.total_count > 0) {
          console.log(responseJSON.items);
          return Promise.resolve(responseJSON.items);
        } else {
          return Promise.reject(`${keyword} tidak ditemukan!`);
        }
      });
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
