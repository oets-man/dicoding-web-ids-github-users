import "../../component/club-list.js";
import "../../component/search-bar.js";
import DataSource from "../data/data-source.js";

const main = () => {
  const searchElement = document.querySelector("search-bar");
  const clubListElement = document.querySelector("club-list");

  const onButtonSearchClicked = async () => {
    try {
      const results = await DataSource.searchClub(searchElement.value);
      renderResult(results);
    } catch (fail) {
      fallbackResult(fail);
    }
  };

  const renderResult = (results) => {
    clubListElement.clubs = results;
  };

  const fallbackResult = (message) => {
    clubListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;

  //auto jalan
  window.addEventListener("load", async () => {
    try {
      const results = await DataSource.searchClub("dara");
      // console.log(results);
      renderResult(results);
    } catch (fail) {
      fallbackResult(fail);
    }
  });
};
export default main;
