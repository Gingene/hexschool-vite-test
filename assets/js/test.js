export function clickAdd(inputElement, outputElement) {
  let number = 0;
  const setNumber = (num) => {
    number = num;
    outputElement.innerText = number;
  };
  inputElement.addEventListener("click", () => setNumber(number + 1));
  setNumber(0);
}

// add(add1B, testH2);
