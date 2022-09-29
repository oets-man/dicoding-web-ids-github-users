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
    return fetch(`https://sports-api.dicoding.dev/teams/search?t=${keyword}`)
      .then((response) => {
        return response.json();
      })
      .then((responseJSON) => {
        if (responseJSON.teams) {
          return Promise.resolve(responseJSON.teams);
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
