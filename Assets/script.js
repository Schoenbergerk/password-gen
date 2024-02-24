// Possible characters for password
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChars = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];



// Assignment Code
var generateBtn = document.querySelector("#generate");


// Builds password
function generatePassword() {
  var passWordLength = prompt("How many characters do your password need to be?");
  console.log(length);
  while (passWordLength < 8 || passWordLength > 128) {
    alert("Please pick a number between 8 and 128")
    var length = prompt("How many characters do your password need to be?");
  }

  var isLowerCase = confirm("Do you need lowercase letters?")
  var isUpperCase = confirm("Do you need uppercase letters?")
  var isNumbers = confirm("Do you need numbers?")
  var isSpecialChars = confirm("Do you need special characters?")
  // console.log(isLowerCase);
  // console.log(isUpperCase);
  // console.log(isNumbers);
  // console.log(isSpecialChars);

// Loops through options if user declines all prompts without needing a refresh
  while (isLowerCase === false && isUpperCase === false && isNumbers === false && isSpecialChars === false) {
    alert("You must choose at least one character option")
    var isLowerCase = confirm("Do you need lowercase letters?")
    var isUpperCase = confirm("Do you need uppercase letters?")
    var isNumbers = confirm("Do you need numbers?")
    var isSpecialChars = confirm("Do you need special characters?")
  }

  var userInput = []

  if (isLowerCase === true) {
    userInput = userInput.concat(lowerCase)
  }

  if (isUpperCase === true) {
    userInput = userInput.concat(upperCase)
  }

  if (isNumbers === true) {
    userInput = userInput.concat(numbers)
  }

  if (isSpecialChars === true) {
    userInput = userInput.concat(specialChars)
  }
  console.log(userInput);

  buildPassword = ""
  
// Runs until the length has been reached
  for (let i = 0; i < passWordLength; i++) {
    buildPassword = buildPassword + userInput[Math.floor(Math.random() * userInput.length)];
    console.log(buildPassword);
  }
  return buildPassword;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
