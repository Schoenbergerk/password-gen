// Possible characters for password
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var specialChars = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~']



// Assignment Code
var generateBtn = document.querySelector("#generate");


// Collect user inputs
function userInput() {
  var length = prompt("How many characters do your password need to be?");
  console.log(length);
  while (length < 8 || length > 128) {
    alert("Please pick a number between 8 and 128")
    var length = prompt("How many characters do your password need to be?");
  }

var isLowerCase = confirm("Do you need lowercase letters?")
console.log(isLowerCase);
var isUpperCase = confirm("Do you need uppercase letters?")
console.log(isUpperCase);
var isNumbers = confirm("Do you need numbers?")
console.log(isNumbers);
var isSpecialChars = confirm("Do you need special characters?")
console.log(isSpecialChars);

while (isLowerCase === false && isUpperCase === false && isNumbers === false && isSpecialChars === false) {
  alert("You must choose at least one character option")
  var isLowerCase = confirm("Do you need lowercase letters?")
  var isUpperCase = confirm("Do you need uppercase letters?")
  var isNumbers = confirm("Do you need numbers?")
  var isSpecialChars = confirm("Do you need special characters?")
}

}



// Take user inputs and generate password
function generatePassword() {
  var options = userInput();
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
