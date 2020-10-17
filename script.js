// Assignment Code
var generateBtn = document.querySelector("#generate");

// the password length prompt loops while the answer is invalid.
var passwordlength = prompt("how many characters between 8 and 128?");
while (passwordlength <= 8 || passwordlength >= 128) {
  alert("please enter a valid length");
  passwordlength = prompt("how many characters between 8 and 128?");
}
const includeUppercase = confirm("would you like to include Uppercase letters?");
const includeNumbers = confirm("would you like to include Numbers?");
const includeSymbols = confirm("would you like to include Symbols?");

const Uppercasecharcodes = arrayfromlowtohigh(65, 90);
const Lowercasecharcodes = arrayfromlowtohigh(97, 122);
const Numbercharcodes = arrayfromlowtohigh(48, 57);
const Symbolcharcodes = arrayfromlowtohigh(33, 47).concat(arrayfromlowtohigh(58, 64)).concat(arrayfromlowtohigh(91, 96)).concat(arrayfromlowtohigh(123, 126));



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// this function takes the character codes and puts them into an array.
function arrayfromlowtohigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

// this function determines if the user chose to have Uppercase, numbers, and symbols in thier password and adds it to the potential characters and generates a password
// according to the length desired by the user.
function generatePassword() {
  let charCodes = Lowercasecharcodes;
  if (includeUppercase) charCodes = charCodes.concat(Uppercasecharcodes);
  if (includeNumbers) charCodes = charCodes.concat(Numbercharcodes);
  if (includeSymbols) charCodes = charCodes.concat(Symbolcharcodes);
  const passwordCharacters = [];
  console.log(charCodes);

  for (i = 0; i < passwordlength; i++) {
    var randomnum = Math.floor(Math.random() * charCodes.length);
    const charactercode = charCodes[randomnum]
    passwordCharacters.push(String.fromCharCode(charactercode))
  }
  return passwordCharacters.join('')
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
