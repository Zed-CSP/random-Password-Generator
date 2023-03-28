// dom element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//initial Password Generator Function
function generatePassword() {

    // Prompt user for password length
    // parseint used to convert string to integer
    let passwordLength = parseInt(prompt("How many characters would you like your password to contain? (Must be 8-128) "));
    // if statement to check if password length is between 8 and 128
    // isNaN used to check (edge case) if input is a number
    console.log(passwordLength);

}