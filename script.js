// Assignment Code
var generateBtn = document.querySelector("#generate");

//declare variables with usable characters

var numbers = "0123456789";
var lettersLower = "abcdefghijklmnopqrstuvwxyz";
var lettersUpper = "ABCDEFGHIJKLMNOPQRSTUBWXYZ";
var specialChar = ".-_!@#$%^&*+";
//create empty array to pull characters from
var possibleChar = [];

function generatePassword() {
  
  //creat empty string to save values in
  var userPass = "";
  console.log(userPass);

  //ask the user what kind of characters they want in the password and then logs the response and add them to an array
  var numChar = prompt("How many characters would you like to use?");
  //console.log(numChar);
  //limit amount of characters
  if(numChar > 100 ) {
    alert("Please select less than 100 characters.");
    var numChar = prompt("How many characters would you like to use?");
  }
  if(numChar <8 ) {

  }

  var useLower = confirm("Would you like lowercase letters?");
  // console.log(useLower);
  //if true then add lowercase characters to the possibleChar array
  if (useLower) {
    possibleChar.push(lettersLower);
  }

  var useUpper = confirm("Would you like uppercase letters?");
  // console.log(useUpper);
  //if true then add uppercase charaters to the possibleChar array
  if (useUpper) {
    possibleChar.push(lettersUpper);
  }

  var useSpecial = confirm("Would you like special characters");
  // console.log(useSpecial);
  //if true then add special characters to the possibleChar array
  if (useSpecial) {
    possibleChar.push(specialChar);
  }

  var useNumbers = confirm("Would you like numbers?");
  //console.log(useNumbers);
  if (useNumbers) {
    possibleChar.push(numbers);
  }
  console.log(possibleChar);


  //create loop that adds how many characters the user wanted in a string
 for (var index = 0; index < numChar; index++) {
  var getChar = possibleChar[Math.floor(Math.random() * possibleChar.length)];
  var addToPass = getChar[Math.floor(Math.random() * getChar.length)];
  //updates password
  userPass += addToPass;
 }
  //empty possibleChar array
  possibleChar = [];
  console.log(possibleChar);


  return userPass
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//create global function that we can use to get a value from a string that we got from a random value in an array
//clear array after password is made
