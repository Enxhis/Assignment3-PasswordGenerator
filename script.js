// Variables
var lowerCase = "abcdefghijklmnopqrtuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialChar = "!@#$%^&*(){}[]=<>/,.'";
var l = document.querySelector("#length");

// length of the pasword function
function paswLength() {
  var pl = l.value;
  var len = parseInt(pl);
  if (len < 8 || len > 128) {
    alert("Length of the pasword should be between 8 - 128 characters! Set a new length! ");
  } else {
    return len;
  }
}

console.log(paswLength());

//Generate pasword function
function generatePassword() {
  var pasw = "";
  var dict = "";
  var pLength = paswLength();
  console.log(dict);
  console.log(pLength);
  // check what the user wants to include in the password
  if (document.querySelector("#upperCase").checked == true) {
    dict += upperCase;
  }
  if (document.querySelector("#lowerCase").checked == true) {
    dict += lowerCase;
  }
  if (document.querySelector("#number").checked == true) {
    dict += numbers;
  }
  if (document.querySelector("#specialChar").checked == true) {
    dict += specialChar;
  }
  console.log(dict);
  // If user doesn't check any option
  if (dict == "") {
    pasw = " You must select at least one from the character types! ";
  } else { // else it generates a pasword with options selected
    for (var i = 0; i < pLength; i++) {
      console.log(pasw);
      pasw = pasw + dict.charAt(Math.floor(Math.random() * Math.floor(dict.length - 1)));
    } console.log(pasw);
  } return pasw;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
  // Previously generated passwords code
  // tab to create space between passwords
  var TAB = "\t";
  // in order not to store as password the statement
  if(password != " You must select at least one from the character types! "){
    document.getElementById("prevPassword").innerHTML += password + TAB;
  }

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);