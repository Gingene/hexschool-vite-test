import "./assets/scss/all.scss";

const testH2 = document.querySelector("#testH2");
const btn = document.querySelector(".btn");

let number = 0;
btn.addEventListener("click", () => {
  number += 1;
  testH2.innerText = number;
});
