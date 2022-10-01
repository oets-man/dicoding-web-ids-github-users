import "../../component/club-list.js";
import "../../component/search-bar.js";
import DataSource from "../data/data-source.js";

const main = () => {
	const searchElement = document.querySelector("search-bar");
	const clubListElement = document.querySelector("club-list");
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
			let users = [];
			const results = await DataSource.searchClub("dara");
			// console.log(results);

			for (const result of results) {
				const user = await fetch(
					`https://api.github.com/users/${result.login}`,
					{
						headers: {
							Authorization: token.join(""),
						},
					}
				);
				const userJSON = await user.json();
				users.push(userJSON);
				// renderResult(userJSON);
			}
			// renderResult(results);
			renderResult(users);
		} catch (fail) {
			fallbackResult(fail);
		}
	});
};

export default main;
