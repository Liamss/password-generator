// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options parseInt converts the input into a string, parses it then returns a number
function getPasswordOptions() {
  var passwordLength = parseInt(prompt("Enter the length of password required between 8 and 128 characters:"))
}

// Validate input is a number between 8 and 128 - return null if failed validation

if (isNaN (passwordLength) || passwordLength <8 || passwordLength > 128) {
  alert("Password length must be a number between 8 and 128 characters.");
  return null; 
}

// Prompts for character types 

var includeLowercase = confirm("Include lowercase character?")
var includeUppercase = confirm("Include uppercase characters?")
var includeNumber = confirm("Include numeric characters?")
var includeSpecial = confirm("Include special characters?")

// Validate that at least one character type is selected 
if (!(includeLowercase  ||  includeUppercase  || includeNumeric  || includeSpecial )) {
 alert ("You must select one character type");
 return null; 
}


// Function for getting a random element from an array
function getRandom(arr) {
 var randomIndex = Math.floor(Math.random() * arr.length);
 return arr[randomIndex];

}

// Function to generate password with user input
function generatePassword() {
var options = getPasswordOptions ()
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);