// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    // pick a number frm 8 - 128
    let pwLength = passwordLength();
    // make user pick lower or uppercase options
    let isLowerCase = confirm("Would you like to use lowercase?");
    let isUpperCase = confirm("Would you like to use uppercase?");
    // if user picks no to both lowercase AND uppercase
    // an alert along with more prompts will appear
    while (isLowerCase === false && isUpperCase === false) {
        alert("Please pick one or both of the options.")
        isLowerCase = confirm("Would you like to use lowercase?");
        // user to pick yes/no to uppercase
        isUpperCase = confirm("Would you like to use uppercase?");
    }

    // var password = generatePassword();
    // generatePassword(length);
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// create generatePassword function below
function generatePassword(length) {
    // array to store a-z
    let letters = "abcdefghigklmnopqrstuvwxyz";
    let alphabetArray = letters.split("");

    console.log(alphabetArray[0].toUpperCase());
    // toUpperCase, toLowerCase
    // randomize Math.random, Math.floor
}

// function to ask for length of password
function passwordLength() {
    let result = prompt("How long do you want your password to be?");
    // convert result to number
    let newResult = parseInt(result);

    // newResult must be between 8-128
    while (newResult < 8 || newResult > 128) {
        newResult = prompt("Please enter a number between 8 and 128.")
    }
    return newResult;
}
