import moment from "moment";
class AppBar extends HTMLElement {
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
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    :host {
      display: block;
      width: 100%;
      background-color: #333333;
      color: white;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      overflow:auto;
    }
    h2 {
      padding: 16px;
      float:left;
    }

    .clock {
      float:right;
      width: fit-content;
      padding: 10px 10px 0 0;
      color: white;
      display: flex;
      flex-direction: column;
      text-align:end;
    }
   
    .clock .time {
      font-size: 1em;
    }

    .clock .date {
      font-size: 1em;
    }
    .clock .delimiter {
      display: none;
    }
    

    @media screen and (max-width: 600px) {
      h2{
        float: none;
        padding: 4px 0 0 16px;
      }
      .clock .delimiter {
        display: inline;
      }
      .clock {
        float: none;
        display: inline-block;
        padding: 0 0 8px 16px;
      }
    }
  </style>
    <h2>Pencarian User GitHub</h2>
    <div class="clock">
      <span class="date"></span>
      <span class="delimiter">|</span>
      <span class="time"></span>
    </div>
    `;
	}
}
customElements.define("app-bar", AppBar);

(function () {
	let component = document.querySelector("app-bar");

	const displayTime = () => {
		moment.locale("id");
		let time = component.shadow.querySelector(".time");
		let date = component.shadow.querySelector(".date");

		date.innerHTML = moment().format("dddd, LL");
		time.innerHTML = moment().format("hh:mm:ss (A)");
	};

	const updateTime = () => {
		displayTime();
		setTimeout(updateTime, 1000);
	};
	updateTime();
})();
