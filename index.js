let store = ""; //stores the inputs
let result = ""; // clone of the output that is evaluated by the equals button
let numbers = document.querySelectorAll(".number_buttons");
let specialButtons = document.querySelectorAll(".buttons");
numbers = Array.from(numbers);
specialButtons = Array.from(specialButtons);
// equals();

// input for numbers
for (let number of numbers) {
  number.addEventListener("click", () => {
    result += number.value;
    document.getElementById("input-field").innerText = parseFloat(result);
  });
}

// input for special buttons
for (let buttons of specialButtons) {
  buttons.addEventListener("click", () => {
    result += buttons.value;
    store += result;
    result = "";
  });
}

// equals button
function equals() {
  document.getElementById("equals_sign").onclick = () => {
    document.getElementById("input-field").innerText = eval(store + result);
    store = "";
    result = "";
  };
}
equals();

// clear button
function clear() {
  document.getElementById("clear_button").onclick = () => {
    store = "";
    result = "";
    document.getElementById("input-field").innerText = 0;
  };
}
clear();

// backspace button
document.getElementById("backspace").onclick = () => {
  result = result.toString();
  result = result.slice(0, -1);
  document.getElementById("input-field").innerText = result;
};

// negation button
document.getElementById("negation").onclick = () => {
  result = -result;
  document.getElementById("input-field").innerText = result;
};

// square root button
document.getElementById("square_root").onclick = () => {
  result = Math.sqrt(result);
  document.getElementById("input-field").innerText = result;
  result = "";
};
