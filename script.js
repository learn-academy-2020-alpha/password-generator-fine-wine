// Assignment Code
var generateBtn = document.querySelector("#generate");
// array to store a-z
let letters = "abcdefghigklmnopqrstuvwxyz";
let alphabetArray = letters.split("");
var passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
    // stores password length input
    let pwLength = passwordLength();
    // make user pick lower or uppercase options
    let isLowerCase = confirm("Would you like to include lowercase letters in your password?");
    let isUpperCase = confirm("Would you like to include uppercase letters in your password?");
    // if user picks no to both lowercase AND uppercase
    // an alert along with more prompts will appear
    while (isLowerCase === false && isUpperCase === false) {
        alert("Please pick one or both of the options.")
        isLowerCase = confirm("Would you like to use lowercase?");
        isUpperCase = confirm("Would you like to use uppercase?");
    }

    // stores generaged password into the variable password
    // var password = generatePassword();

    // sets the password within the HTML file
    passwordText.value = password;
}

// create generatePassword function below
function generatePassword(length) {
    console.log(alphabetArray[0].toUpperCase());
    // toUpperCase, toLowerCase
    // randomize Math.random, Math.floor
    // .charAt()
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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
