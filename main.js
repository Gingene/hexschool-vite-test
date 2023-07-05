import "./assets/scss/all.scss";
import "./node_modules/bootstrap/js/index.umd"; // import bootstrap js

import { clickAdd } from "./assets/js/test";
import "./assets/js/testform";

const testH2 = document.querySelector("#testH2");
const add1B = document.querySelector("#add1");

clickAdd(add1B, testH2);
