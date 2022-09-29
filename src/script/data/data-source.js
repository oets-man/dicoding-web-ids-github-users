import { async } from "regenerator-runtime";
// import clubs from "./clubs.js";

class DataSource {
  static searchClub = async (keyword) => {
    const token = [
      "token ",
      "ghp_",
      "P1Wdt",
      "tRJRt",
      "aYt3",
      "PuhS9b",
      "WyPs",
      "tUhb",
      "dN4U",
      "YdZK",
    ];
    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=${keyword}`
      );
      const responseJSON = await response.json();
      let results = [];
      if (responseJSON.total_count > 0) {
        const items = responseJSON.items;
        return items;

        // for (let i = 0; i < items.length; i++) {
        //   const el = items[i];
        //   // console.log(el.login);
        //   fetch(`https://api.github.com/users/${el.login}`, {
        //     headers: {
        //       Authorization: token.join(""),
        //     },
        //   })
        //     .then((res) => {
        //       return res.json();
        //     })
        //     .then((rj) => {
        //       // console.log(rj);
        //       results.push(rj);
        //     });
        // }
        // console.log(results);
        // console.log(items);
        // return results;
      } else {
        return `${keyword} tidak ditemukan!`;
      }
    } catch (error) {
      ("Cek koneksi internet");
    }
  };
}
export default DataSource;
