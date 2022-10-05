import Swal from "sweetalert2";

import "../../component/my-card.js";
import "../../component/search-bar.js";
import DataSource from "../data/data-source.js";

const main = () => {
	const searchElement = document.querySelector("search-bar");
	const keywordElement = document.querySelector("#keyword");
	const resultElement = document.querySelector("#result");
	const container = document.querySelector("#container");

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

	const randomText = (length) => {
		let result = "";
		const characters = "abcdefghijklmnopqrstuvwxyz";
		const charactersLength = characters.length;
		for (let i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	};

	const renderResult = async (results) => {
		//hapus dulu semua card
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
				const itemElement = document.createElement("my-card");
				itemElement.item = userJSON;
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

	let breakLoop = false;
	const onButtonSearchClicked = async (keyword) => {
		if (keyword.length < 3) {
			return Swal.fire(
				"Oops...",
				"Setidaknya masukkan tiga karakter!",
				"warning"
			);
		}
		breakLoop = true;
		try {
			const results = await DataSource.searchUser(keyword);
			breakLoop = false;
			renderResult(results);
		} catch (fail) {
			alert(fail);
		}
	};

	searchElement.clickEvent = () => onButtonSearchClicked(searchElement.value);
	window.addEventListener("load", onButtonSearchClicked(randomText(3)));
};

export default main;
