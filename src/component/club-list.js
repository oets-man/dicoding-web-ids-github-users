import "./club-item.js";

class ClubList extends HTMLElement {
	constructor() {
		super();
		this.shadow = this.attachShadow({ mode: "open" });
	}
	set clubs(clubs) {
		this._clubs = clubs;
		this.render();
	}

	render() {
		this.shadow.innerHTML = `
      <style>
      * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
      </style>
    `;

		this._clubs.forEach((club) => {
			const clubItemElement = document.createElement("club-item");
			clubItemElement.club = club;
			this.shadow.appendChild(clubItemElement);
		});
	}

	renderError(message) {
		this.shadow.innerHTML = "";
		this.shadow.innerHTML += `<h2 class="placeholder">${message}</h2>`;
	}
}
customElements.define("club-list", ClubList);
