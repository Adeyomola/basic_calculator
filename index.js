let store = ""; //stores the inputs
let result = ""; // clone of the output that is evaluated by the equals button
let numbers = document.querySelectorAll(".number_buttons");
let specialButtons = document.querySelectorAll(".buttons");
// equals();

// input for numbers
for (let number of numbers) {
  function input() {
    result += number.value;
    document.getElementById("input-field").value = parseFloat(result);
  }
  number.addEventListener("click", input);
}

// input for special buttons
for (let buttons of specialButtons) {
  function inputSpecialButtons() {
    result += buttons.value;
    store += result;
    result = "";
  }
  buttons.addEventListener("click", inputSpecialButtons);
}

// equals button
function equals() {
  document.getElementById("equals_sign").onclick = () => {
    document.getElementById("input-field").value = eval(store + result);
    store = "";
    result = "";
  };
}
equals();

// clear button
document.getElementById("clear_button").onclick = () => {
  store = "";
  result = "";
  document.getElementById("input-field").value = "";
};

// backspace button
document.getElementById("backspace").onclick = () => {
  result = result.toString();
  result = result.slice(0, -1);
  document.getElementById("input-field").value = result;
};

// negation button
document.getElementById("negation").onclick = () => {
  result = -result;
  document.getElementById("input-field").value = result;
};

// square root button
document.getElementById("square_root").onclick = () => {
  result = Math.sqrt(result);
  document.getElementById("input-field").value = result;
  result = "";
};
