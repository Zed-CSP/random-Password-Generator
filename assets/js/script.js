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

  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt("Invalid input. Please enter password length (8-128 characters):"));
    }
   
    // Prompt user for character types
    let includeLowercase = confirm("Click OK to confirm including lowercase characters");
    let includeUppercase = confirm("Click OK to confirm including uppercase characters");
    let includeNumbers = confirm("Click OK to confirm including numeric characters");
    let includeSpecial = confirm("Click OK to confirm including special characters");

    
}