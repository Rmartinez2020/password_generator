//target generate button
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

  //ask the user what kind of characters they want in the password and add them to an array

  var numChar = prompt("How many characters would you like to use?");
  //limit amount of characters
  if (numChar > 100) {
    alert("Please select less than 100 characters.");
    var numChar = prompt("How many characters would you like to use?");
  }
  if (numChar < 8) {
    alert("Please select more than 8 characters.");
    var numChar = prompt("How many characters would you like to use?");
  }
  //limit input to only numbers
  numChar = parseInt(numChar);
  console.log(numChar);
  if (isNaN(numChar)) {
    alert("That is not a number!");
    //if a number is not entered end function
    return;
  }
  else {
    var useLower = confirm("Would you like lowercase letters?");
    //if true then add lowercase characters to the possibleChar array
    if (useLower) {
      possibleChar.push(lettersLower);
    }

    var useUpper = confirm("Would you like uppercase letters?");
    //if true then add uppercase charaters to the possibleChar array
    if (useUpper) {
      possibleChar.push(lettersUpper);
    }

    var useSpecial = confirm("Would you like special characters");
    //if true then add special characters to the possibleChar array
    if (useSpecial) {
      possibleChar.push(specialChar);
    }

    //if true then add special characters to the numbers array
    var useNumbers = confirm("Would you like numbers?");
    if (useNumbers) {
      possibleChar.push(numbers);
    }
    //log to check which values are in array
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
    //logs empty arry
    console.log(possibleChar);


    return userPass
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  //if no password is created then dont print anything to the page
  if (password === undefined) {
    return;
  }
  else {
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);