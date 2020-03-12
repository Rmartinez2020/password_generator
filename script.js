// Assignment Code
var generateBtn = document.querySelector("#generate");

//declare arrays with usable characters

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lettersLower = "abcdefghijklmnopqrstuvwxyz";
var lettersUpper = "ABCDEFGHIJKLMNOPQRSTUBWXYZ";
var specialChar = [".-_!@#$%^&*+"];


function generatePassword() {
  //ask the user what kind of characters they want in the password and then logs the response
  var numChar = prompt("How many characters would you like to use?");
  console.log(numChar);
  var useLower = confirm("Would you like lowercase letters?");
  console.log(useLower);
  var useUpper = confirm("Would you like uppercase letters?");
  console.log(useUpper);
  var useSpecial = confirm("Would you like speacial characters");
  console.log(useSpecial);
  var useNumbers = confirm("Would you like numbers?");
  console.log(useNumbers);


  return "THIS IS THE PASSWORD"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
