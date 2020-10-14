var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var specialCharacters = [
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//Global Variables - can be seen anywhere
var passwordLength;
//get options from user input
function generateOptions() {
  passwordLength = parseInt(prompt("Please choose a length for your password"));
  if (isNaN(passwordLength) === true) {
    alert("Please provide password length as a number");
    return;
  } else if (passwordLength < 8) {
    alert("Please provide at least 8 characters");
    return;
  } else if (passwordLength > 128) {
    alert("Please provide less than 128 characters");
    return;
  }
  var hasLowerCase = confirm(
    "Click okay if you want to include lowercase in your password"
  );
  var hasUpperCase = confirm(
    "Click okay if you want to include uppercase in your password"
  );
  var hasNumbers = confirm(
    "Click okay if you want to include numbers in your password"
  );
  var hasSpecialCharacters = confirm(
    "Click okay if you want to include special characters in your password"
  );
  //if else statement
  if (
    hasSpecialCharacters === false &&
    hasNumbers === false &&
    hasLowerCase === false &&
    hasUpperCase === false
  ) {
    alert("please choose at least one");
  }
  //store the user input in an object
  var password = {
    length: passwordLength,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumbers: hasNumbers,
    hasUpperCase: hasUpperCase,
    hasLowerCase: hasLowerCase,
  };
  return password;
}
//function will return random password
function generateRandom(array) {
  var randomArray = Math.floor(Math.random() * array.length);
  var randomElement = array[randomArray];
  return randomElement;
}

var generateBtn = document.querySelector("#generate");
//function will write password to the HTML element
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// this function serves to generate a new password
function generatePassword() {
  var passwordOptions = generateOptions();
  //collecting the password result in empty array (to be used later)
  var result = [];
  //collecting possible characters in empty array
  var possibleChars = [];
  //collecting guaranteed characters in empty array
  var guaraChars = [];
  if (passwordOptions.hasSpecialCharacters) {
    possibleChars = possibleChars.concat(specialCharacters);
    guaraChars.push(generateRandom(specialCharacters));
  }
  if (passwordOptions.hasNumbers) {
    possibleChars = possibleChars.concat(numbers);
    guaraChars.push(generateRandom(specialCharacters));
  }
  if (passwordOptions.hasUpperCase) {
    possibleChars = possibleChars.concat(upperCase);
    guaraChars.push(generateRandom(upperCase));
  }
  if (passwordOptions.hasLowerCase) {
    possibleChars = possibleChars.concat(lowerCase);
    guaraChars.push(generateRandom(lowerCase));
  }

  //This for loop creates a random character from the possibleChars array created above in
  //generatepassWord() and loops until the characters are the length of the prompted choosen user input
  for (var i = 0; i < passwordLength; i++) {
    var r = Math.floor(Math.random() * possibleChars.length);
    result = result + possibleChars[r];
  }

  console.log(result);
  return result;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
