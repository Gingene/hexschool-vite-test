const ex1 = document.querySelector("#ex1");
const outputP = document.querySelector(".form-ex1-output");
const fB = document.querySelector("#fB");

function getInputValue(input, output) {
  input.addEventListener("input", () => {
    output.innerHTML = input.value;
  });
  //   inputHandler("");
}

function getInputButton(input, button) {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    let temp = input.value;
    outputP.innerHTML = temp;
  });
}

// getInputValue(ex1, outputP);
getInputButton(ex1, fB);
