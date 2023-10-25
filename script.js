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

// Function to prompt the user for password options
function getPasswordOptions() {
  var passwordLength = parseInt(prompt("Enter the length of password required between 8 and 128 characters:"));

  // Validate the password length
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be a number between 8 and 128 characters.");
  }

  // Prompt the user for character type choices - with cancel being no as the default
  var includeLowercase = confirm("Include lowercase characters? 'OK' for Yes / 'Cancel' for No");
  var includeUppercase = confirm("Include uppercase characters? 'OK' for Yes / 'Cancel' for No");
  var includeNumeric = confirm("Include numeric characters? 'OK' for Yes / 'Cancel' for No");
  var includeSpecial = confirm("Include special characters? 'OK' for Yes / 'Cancel' for No");

  // Validate at least one character type is selected
  if (!(includeLowercase || includeUppercase || includeNumeric || includeSpecial)) {
    alert("You must select at least one character type.");
  }

  // Return an object containing the user's choices
  return {
    length: passwordLength,
    includeLowercase: includeLowercase,
    includeUppercase: includeUppercase,
    includeNumeric: includeNumeric,
    includeSpecial: includeSpecial
  };
}

// Function to get a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate a password based on user input
function generatePassword() {
  var options = getPasswordOptions();

  if (!options) {
    return ""; // Return an empty string if no options are selected
  }

  var availableCharacters = [];
  var result = "";

  if (options.includeLowercase) {
    availableCharacters = availableCharacters.concat(lowerCasedCharacters);
  }
  if (options.includeUppercase) {
    availableCharacters = availableCharacters.concat(upperCasedCharacters);
  }
  if (options.includeNumeric) {
    availableCharacters = availableCharacters.concat(numericCharacters);
  }
  if (options.includeSpecial) {
    availableCharacters = availableCharacters.concat(specialCharacters);
  }

  for (var i = 0; i < options.length; i++) {
    var randomCharacter = getRandom(availableCharacters);
    result += randomCharacter;
  }

  return result;
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