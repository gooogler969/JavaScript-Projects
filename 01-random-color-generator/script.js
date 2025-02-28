let generateBtn = document.getElementById("btn");
let colorCode = document.getElementById("color-code");

// Function generator
function getRandomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  //All colors
  let color = `rgb(${red}, ${green}, ${blue})`;

  //Change background and text to random
  document.body.style.backgroundColor = color;
  colorCode.innerHTML = color;
}

//Add event to button
generateBtn.addEventListener("click", getRandomColor);
