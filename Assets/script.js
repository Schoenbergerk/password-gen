// Assignment Code
var generateBtn = document.querySelector("#generate");


// Collect user inputs




// Take user inputs and generate password




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
