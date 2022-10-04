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
    //prompt for whether they want or dont want lowercase letters
  
    var lowercase = window.confirm("Would you like lowercase letters.");
  
    if (lowercase === true) {
      var beta = "abcdefghijklmnopqrstuvwxyz";
      characters += beta;     
    }
    // prompt whether they want or dont want uppercase letters
    var uppercase = window.confirm("Would you like uppercase letters.");
    
    if (uppercase === true) {
      var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      characters += alpha;      
    }
    //prompt if they want or dont want numbers
  
  var digits = window.confirm("Would you like numbers included.");
  
  if (digits === true) {
    var numbers = "1234567890";
    characters += numbers;      
  }
  //prompt if they want or dont want symbols
  
  var funky =window.confirm("Would you like symbols included.");
  
  if (funky === true) {
    var symbols = " !#$%&()*+,-./:;<=>?@[\]^_`{|}~";
    characters += symbols;
  }

    //should generate the password using length added by user and what strings they confirmed
    for (var i = 0; i <= length; ++i) {
        var randomNumber = Math.floor(Math.random() * characters.length);
        password += characters.substring(randomNumber, randomNumber +1);    
      }      
      return password;
    }
    function writePassword() {
      
      
      var passwordText = document.querySelector("#password");
      
      passwordText.value = generatePassword();
      
    }

    // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
