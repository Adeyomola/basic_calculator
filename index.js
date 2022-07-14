const CalculatorScreen = document.getElementById("input-field");
let store = ""; //stores the inputs
let result = ""; // clone of the output that is evaluated by the equals button

let numbers = document.querySelectorAll(".number_buttons");
let specialButtons = document.querySelectorAll(".buttons");
numbers = Array.from(numbers);
specialButtons = Array.from(specialButtons);

for (let number of numbers) {
  // input for numbers
  number.addEventListener("click", () => {
    result += number.value;
    CalculatorScreen.value = parseFloat(result);
  });

  // keyboard input for numbers
  document.addEventListener("keydown", (e) => {
    if (e.key == number.value) {
      result += e.key;
      CalculatorScreen.value = parseFloat(result);
    }
  });
}

for (let buttons of specialButtons) {
  // input for special buttons
  buttons.addEventListener("click", () => {
    CalculatorScreen.value = eval(store + result);
    result += buttons.value;
    store += result;
    result = "";
  });

  // keyboard input for special buttons
  document.addEventListener("keydown", (e) => {
    if (e.key == buttons.value) {
      CalculatorScreen.value = eval(store + result);
      result += e.key;
      store += result;
      result = "";
      console.log(result);
      console.log(store);
    }
  });
}

// keyboard input for exponetiation operator
document.addEventListener("keydown", (e) => {
  if (e.key == "Dead") {
    result += "**";
    store += result;
    result = "";
    console.log(result);
    console.log(store);
  }
});
// keyboard input for percentage
document.addEventListener("keydown", (e) => {
  if (e.key == "%") {
    result += "/100";
    store += result;
    result = "";
  }
});

// equals button
function equals() {
  document.getElementById("equals_sign").onclick = () => {
    CalculatorScreen.value = eval(store + result);
    result = eval(store + result);
    store = "";
  };

  document.addEventListener("keydown", (e) => {
    if (e.key == "=") {
      CalculatorScreen.value = eval(store + result);
      result = eval(store + result);
      store = "";
    }
  });
}
equals();

// clear button
function clear() {
  document.getElementById("clear_button").onclick = () => {
    store = "";
    result = "";
    CalculatorScreen.value = 0;
  };
}
clear();

// backspace button
document.getElementById("backspace").onclick = () => {
  result = result.toString();
  result = result.slice(0, -1);
  CalculatorScreen.value = result;
};
document.addEventListener("keydown", (e) => {
  if (e.code == "Backspace") {
    result = result.toString();
    result = result.slice(0, -1);
    CalculatorScreen.value = result;
  }
});

// negation button
document.getElementById("negation").onclick = () => {
  result = -result;
  CalculatorScreen.value = result;
};

// square root button
document.getElementById("square_root").onclick = () => {
  result = Math.sqrt(result);
  CalculatorScreen.value = result;
};
