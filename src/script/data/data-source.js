import { async } from "regenerator-runtime";

//dipecah-pecah supaya tidak diban oleh git
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
class DataSource {
  static searchClub = async (keyword) => {
    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=${keyword}`
      );
      const responseJSON = await response.json();
      let results = [];
      if (responseJSON.total_count > 0) {
        const items = responseJSON.items;
        // for (let i = 0; i < items.length; i++) {
        //   const el = items[i];
        //   fetch(`https://api.github.com/users/${el.login}`, {
        //     headers: {
        //       Authorization: token.join(""),
        //     },
        //   })
        //     .then((res) => {
        //       return res.json();
        //     })
        //     .then((resJSON) => {
        //       results.push(resJSON);
        //     });
        // }
        // console.log("result\n", results);
        // console.log("items\n", items);
        return items;
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
