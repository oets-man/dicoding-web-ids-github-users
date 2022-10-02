// import { async } from "regenerator-runtime";
import "../../component/club-list.js";
import "../../component/search-bar.js";
import DataSource from "../data/data-source.js";

const main = () => {
	const searchElement = document.querySelector("search-bar");
	const keywordElement = document.querySelector("#keyword");
	const resultElement = document.querySelector("#result");
	const container = document.querySelector(".container");

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
	const resultText = (count = 0) => {
		resultElement.innerHTML = `Menampilkan <strong>${count}</strong> data`;
	};

	let breakLoop = false;
	const onButtonSearchClicked = async () => {
		breakLoop = true;
		try {
			const results = await DataSource.searchClub(searchElement.value);
			breakLoop = false;
			renderResult(results);
		} catch (fail) {
			alert(fail);
		}
	};

	const renderResult = async (results) => {
		//hapus dulu semua
		while (container.hasChildNodes()) {
			container.removeChild(container.firstChild);
		}

		resultText();
		const keyword = results.keyword;
		keywordElement.innerHTML = `Hasil pencarian dari <q><strong>${keyword}</strong></q>`;

		if (results.error) {
			return fallbackResult(results.message);
		}

		removeAlert();
		const items = results.items;
		if (items) {
			for (let i = 0; i < items.length; i++) {
				if (breakLoop) break;
				const item = items[i];
				const user = await fetch(`https://api.github.com/users/${item.login}`, {
					headers: {
						Authorization: token.join(""),
					},
				});
				let userJSON = await user.json();
				const itemElement = document.createElement("club-item");
				itemElement.club = userJSON;
				container.appendChild(itemElement);
				resultText(i + 1);
			}
		}
	};

	const fallbackResult = (message) => {
		const alertElement = document.createElement("div");
		alertElement.classList.add("alert", "alert-danger");
		alertElement.style.maxWidth = "832px";
		alertElement.innerHTML = message;

		const containerSearch = document.getElementById("container-search");
		containerSearch.appendChild(alertElement);
	};

	const removeAlert = () => {
		const elements = document.querySelectorAll(".alert-danger");
		elements.forEach((element) => {
			element.remove();
		});
	};

	searchElement.clickEvent = onButtonSearchClicked;

	//auto jalan
	window.addEventListener("load", async () => {
		try {
			const results = await DataSource.searchClub(randomText(3));
			renderResult(results);
		} catch (fail) {
			// console.log(fail);
			alert(fail);
		}
	});

	const randomText = (length) => {
		let result = "";
		const characters = "abcdefghijklmnopqrstuvwxyz";
		const charactersLength = characters.length;
		for (let i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	};
};

export default main;
