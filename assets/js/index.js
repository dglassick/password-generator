var yourpasswordEl = document.getElementById('yourpassword');
var confirmLowercaseEl = document.getElementById('lowercase');
var confirmUppercaseEl = document.getElementById('uppercase');
var confirmNumbersEl = document.getElementById('numbers');
var confirmSpecialEl = document.getElementById('specialCharacters');
var lengthEl = document.getElementById('passwordLen');
var generateButtonEl = document.getElementById('generateButton');
var copyButton = document.getElementById('copyButton');
// var passwordLength;
// var passwordLengthValue;
// var passwordLengthFinal;

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
   "r", "s", "t", "u", "v", "w", "x", "y", "z"
];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q",
   "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacters = ["?", "!", "@", "$", "&", "*", "#"];
var passwordArray = [];



// This is the event to trigger the password includes the options to confirm different characters
generateButtonEl.addEventListener("click", function () {
   
   var passwordLength = lengthEl.value;
   console.log(passwordLength);
   var trueLowercase = confirmLowercaseEl.checked;
   var trueUppercase = confirmUppercaseEl.checked;
   var trueNumbers = confirmNumbersEl.checked;
   var trueSpecial = confirmSpecialEl.checked;
 generatePassword(trueLowercase, trueUppercase, trueNumbers, trueSpecial, passwordLength)
});

function generatePassword(lowerLetters, upperletters, numbersRan, symbols, passwordLength) {
   var pass = "";
   if(lowerLetters === true) {
      passwordArray.push(lowercase)
      console.log(passwordArray)
   }
   if(upperletters === true) {
      passwordArray.push(uppercase)
      console.log(passwordArray)
   }
   if(numbersRan === true) {
      passwordArray.push(numbers)
      console.log(passwordArray)
   }
   if(symbols === true) {
      passwordArray.push(specialCharacters)
      console.log(passwordArray)
   }
   console.log(passwordLength);
   passwordMixer(passwordLength);
};

// function to generate the password

function passwordMixer(value) {
   console.log(value);
   var newPassword = "";
   for(var i = 0; i < value; i++){
   var randomNumber = Math.floor(Math.random() * passwordArray.length);
   var randomNumber2 = Math.floor(Math.random() * passwordArray[randomNumber].length);
   // passwordArray[randomNumber][randomNumber2]
   newPassword += passwordArray[randomNumber][randomNumber2];
   }
   document.getElementById("yourpassword").placeholder = newPassword
   console.log(newPassword);
};

// Click function to copy the password to clipboard
function copyFunction(){
var copyText = document.getElementById("yourpassword").placeholder;
copyText.select();
document.execCommand("copy");
alert("Copied the text: " + copyText.value);
};