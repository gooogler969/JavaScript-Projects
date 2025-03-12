const createBtn = document.getElementById("btn");
const copyBtn = document.getElementById("copy-btn");
const passwordBox = document.getElementById("password");
const passLength = 12;

//add all characters for generate password
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "123456789";
const symbol = "!@#$%^&*()+|{}<>?/][";

const allChars = upperCase + lowerCase + number + symbol;

//create function on click button
createBtn.addEventListener("click", () => {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (passLength > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
});

//copy function on click button
copyBtn.addEventListener("click", () => {
  passwordBox.select();
  document.execCommand("copy");
});
