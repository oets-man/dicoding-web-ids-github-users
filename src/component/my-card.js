class MyCard extends HTMLElement {
	constructor() {
		super();
		this.shadow = this.attachShadow({ mode: "open" });
	}
	set item(item) {
		this._item = item;
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
      .item {
        text-align: left;
        background-color: azure;
        width: 300px;
        margin: 10px 10px;
        overflow: auto;
        padding: 10px;
        display: inline-block;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        border-radius: 5px;
      }
      .item:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
      }
      img {
        width: 100px;
        float: left;
        margin-right: 10px;
      }
      a:hover{
        font-style:italic;
      }
      tr > :first-child {
        font-style: italic;
        padding-right: 0.25em;
      }
      td {
        line-height: 1.25em;
        text-align: left;
        vertical-align: top;
      }
      </style>

      <div class="item">
        <img
          src="${this._item.avatar_url}"
          alt="user avatar"
        />
        <table>
          <tr>
            <td>login:</td>
            <td>
              <a target="_blank" href="${this._item.html_url}">${this._item.login}</a>
            </td>
          </tr>
          <tr>
            <td>nama:</td>
            <td>${this._item.name}</td>
          </tr>
          <tr>
            <td>email:</td>
            <td>${this._item.email}</td>
          </tr>
          <tr>
            <td>lokasi:</td>
            <td>${this._item.location}</td>
          </tr>
          <tr>
            <td>Bio:</td>
            <td>${this._item.bio}</td>
          </tr>
        </table>
      </div>
      `;
	}
}
customElements.define("my-card", MyCard);
