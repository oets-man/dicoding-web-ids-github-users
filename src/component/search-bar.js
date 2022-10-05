class SearchBar extends HTMLElement {
	constructor() {
		super();
		this.shadow = this.attachShadow({ mode: "open" });
	}
	connectedCallback() {
		this.render();
	}

	render() {
		this.shadow.innerHTML = `
        <style>
        .search-container {
          max-width: 800px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          padding: 16px;
          border-radius: 5px;
          display: flex;
          position: sticky;
          top: 10px;
          background-color: white;
        }

        .search-container > input {
          width: 75%;
          padding: 16px 8px;
          border: 0;
          border-bottom: 1px solid #333333;
          font-weight: bold;
        }

        .search-container > input:focus {
          outline: 0;
          border-bottom: 2px solid #333333;
        }

        .search-container > input:focus::placeholder {
          font-weight: bold;
        }

        .search-container > input::placeholder {
          color: #706C61;
          font-weight: normal;
        }

        .search-container > button {
          width: 23%;
          cursor: pointer;
          margin-left: auto;
          padding: 16px;
          background-color: #333333;
          color: white;
          border: 0;
          text-transform: uppercase;
        }

        @media screen and (max-width: 550px) {
          .search-container {
            flex-direction: column;
            position: static;
          }

          .search-container > input {
            width: 100%;
            margin-bottom: 12px;
          }

          .search-container > button {
            width: 100%;
          }
        }
        </style>

        <div id="search-container" class="search-container">
          <input
            placeholder="Cari GitHub User [login, nama, email, lokasi, bio]"
            id="searchElement"
            type="search"
          />
          <button id="searchButtonElement" type="submit" class="btn btn-primary">Cari</button>
        </div>
        `;

		this.shadow
			.querySelector("#searchButtonElement")
			.addEventListener("click", this._clickEvent);
	}

	set clickEvent(event) {
		this._clickEvent = event;
		this.render();
	}

	get value() {
		return this.shadow.querySelector("#searchElement").value;
	}
}

customElements.define("search-bar", SearchBar);
