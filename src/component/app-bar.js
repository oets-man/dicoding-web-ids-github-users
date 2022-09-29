import updateTime from "./clock.js";
class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
  }

  // Selector :host merupakan selector yang digunakan
  // untuk menunjuk element :host (app-bar) yang menerapkan Shadow DOM.
  // Pada host kita tidak dapat mengatur padding
  // sehingga kita perlu memindahkannya pada elemen <h2>.

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
      background-color: cornflowerblue;
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
      font-family: sans-serif;
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
  </style>
    <h2>Cari User GitHub</h2>
    <div class="clock">
      <span class="time">dummy</span>
      <span class="date">dummy</span>
    </div>
    `;
    updateTime();
  }
}
customElements.define("app-bar", AppBar);
