// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  
  var length = window.prompt("Choose password length of no less than 8 and no more then 128 characters.", "8");
  var password = "";
  var characters = "";
  
  if (!length || length < 8 || length > 128) {
    window.alert("please choose a minumum of 8 char. and max of 128 char.");
    return;
  }