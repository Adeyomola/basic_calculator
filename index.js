const CalculatorScreen = document.getElementById("input-field");
let store = ""; //stores the inputs
let result = ""; // clone of the output that is evaluated by the equals button
// let extraStore = ""; // stores the value of the eval() in equals()
let numbers = document.querySelectorAll(".number_buttons");
let specialButtons = document.querySelectorAll(".buttons");
numbers = Array.from(numbers);
specialButtons = Array.from(specialButtons);
// equals();

// input for numbers
for (let number of numbers) {
  number.addEventListener("click", () => {
    result += number.value;
    CalculatorScreen.value = parseFloat(result);
  });
}

// input for special buttons
for (let buttons of specialButtons) {
  buttons.addEventListener("click", () => {
    CalculatorScreen.value = eval(store + result);
    result += buttons.value;
    store += result;
    result = "";
  });
}

// equals button
function equals() {
  document.getElementById("equals_sign").onclick = () => {
    CalculatorScreen.value = eval(store + result);
    result = eval(store + result);
    store = "";
  };
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
