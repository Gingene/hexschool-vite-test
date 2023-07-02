console.time();
import "./assets/scss/all.scss";
console.timeEnd();

import "./assets/scss/all.scss";
import "./node_modules/bootstrap/js/index.umd";

const testH2 = document.querySelector("#testH2");
const add1B = document.querySelector("#add1");

let number = 0;
add1B.addEventListener("click", () => {
  number += 1;
  testH2.innerText = number;
});
