let buttons = document.querySelectorAll("button");
let equalBtn = document.getElementsByClassName("equalbtn");
let clearBtn = document.querySelector("#clear");
let deleteBtn = document.querySelector("#del");
let DisplayScreen = document.querySelector("#input-text");

let realTimedisplayValue = [];

clearBtn.addEventListener("click", () => {
  realTimeScreenValue = [""];
});

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (!btn.id.match("clear")) {
      realTimedisplayValue.push(btn.value);
      DisplayScreen.innerHTML = realTimedisplayValue.join("");

      if (btn.classList.contains("num")) {
        DisplayScreen.innerHTML = eval(realTimedisplayValue.join(""));
      }
    }
    if (btn.id.match("erase")) {
      realTimedisplayValue.pop();
      DisplayScreen.innerHTML = realTimedisplayValue;
    }
    if (btn.id.match("evaluate")) {
      realTimedisplayValue;
    }

    if (typeof eval(realTimeScreenValue.join("")) == "undefined") {
      DisplayScreen.innerHTML = 0;
    }
  });
});
