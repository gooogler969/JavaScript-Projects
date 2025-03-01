const display = document.querySelector("#display");
const buttons = document.querySelectorAll('input[type="button"]');
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

// Calculate function
const calculate = (btnValue) => {
  if (btnValue === "=" && output !== "") {
    // change % on /100
    try {
      output = eval(output.replace("%", "/100"));
    } catch (error) {
      output = "ERROR";
    }
    // remove display
  } else if (btnValue === "AC") {
    output = "";
    // delete value
  } else if (btnValue === "DEL") {
    output = output.toString().slice(0, -1);
  } else {
    // if display none error
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  // update display value
  display.value = output;
};

// add event on buttons
buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.value));
});
