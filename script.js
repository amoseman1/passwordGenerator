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
  ' " ',
  "#",
  "$",
  "%",
  "&",
  "  ' ",
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

//developed function for user to choose a password length
function generator() {
  var passwordLength = parseInt(
    prompt("Please choose a length for your password")
  );
  if (isNaN(passwordLength) === true) {
    alert("Please provide password length as a number");
    return;
  }
  if (passwordLength < 8) {
    alert("Please provide at least 8 characters");
    return;
  }
  if (passwordLength > 128) {
    alert("Please provide less than 128 characters");
    return;
  }

  generator(); //calls and runs this function

  var userChoices = [];
  
  function chooseCharacters() {
    var hasLowerCase = confirm(
      "Click okay if you want to include lowercase in your password"
    );
    var hasUppercase = confirm(
      "Click okay if you want to include uppercase in your password"
    );
    var hasNumbers = confirm(
      "Click okay if you want to include numbers in your password"
    );
    var hasSpecialCharacters = confirm(
      "Click okay if you want to include special characters in your password"
    );
  
  if (hasLowerCase) {
    userChoices.push(lowerCase);
  }
  if (hasUpperCase) {
    userChoices.push(upperCase);
  }
  if (hasNumbers) {
    userChoices.push(numbers);
  }
  if (hasSpecialCharacters) {
    userChoices.push(specialCharacters);
  }
}

chooseCharacters();

function chooseCharacters() {
  for (var i = 0; i < passwordLength; i++) {
    console.log(passwordLength[i]);
    var passwordGenerated =
      UserChoices[Math.floor(Math.random() * passwordLength)];
    console.log(passwordGenerated);
    var result = result + passwordGenerated;
  }
  }

  chooseCharacters();

//   var chosenCharacters = math.floor(math.random * UserChoices.length)
// console.log(userChoices[chosenCharacters])
  // Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
