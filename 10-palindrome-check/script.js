//get btn for check
document.getElementById("btn").addEventListener("click", function () {
  let txt = document.getElementById("input-text").value;
  checkPalindrome(txt);
});

//palindrome logic
function checkPalindrome(txt) {
  let newText = txt.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let len = newText.length;
  let halfLen = Math.floor(len / 2);
  let result = document.getElementById("result");
  let i;

  for (let i = 0; i < halfLen; i++) {
    if (newText[i] !== newText[len - 1 - i]) {
      result.textContent = "It's not a palindrome";
      return;
    }
    result.textContent = "Yes! It's a palindrome";
  }
}
