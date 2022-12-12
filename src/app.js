function displayNumber(num) {
  let textDisplay = document.querySelector("#input-text");
  textDisplay.innerHTML = num;
}

let number = document.querySelector("#num");
number.addEventListener("click", displayNumber);
