let results = document.querySelector("#input-text");

let calculate = (number) => {
  results.value += number;
};

let result = () => {
  try {
    results.value = eval(results.value);
  } catch (err) {
    results.value = alert("Enter valid input");
  }
};

function clear() {
  results.value = "2";
}

function del() {
  results.value = results.value.slice(0, -1);
}
