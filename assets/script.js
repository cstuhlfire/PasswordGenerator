// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Prompt user for password preferences and build password
// Returns pw (password)
function generatePassword() {
  let pw = ""; //string for building password
  
  let len = promptPasswordLength();

  // If the user did not cancel, prompt for the other criteria
  if (len !== null){
    promptCharTypes();
  }
  
  return pw;
}

// Prompt for password length and check if valid number
// Returns len (length)
function promptPasswordLength() {
  let len = 0;
  
  //prompt user for number until input criteria is met
  while (isNaN(len) || (len < 8 || len > 128)){
    len = prompt("Enter the length of the password.\n\nMust be a number between 8 and 128.");

    // if the user cancels, return len
    if (len === null){
      return len;
    }
  }
  // return len for length of password desired
  return len;
}
 
function promptCharTypes() {
  // initialize array to false
  let typeArray = [false, false, false, false];
  let i = 0;

  // Allow lowercase?
  typeArray[i++] = confirm("Do you want to include lowercase letters in your password?\n\nChoose OK to include and Canel to exclude.");

  // Allow uppercase?
  typeArray[i++] = confirm("Do you want to include uppercase letters in your password?\n\nChoose OK to include and Canel to exclude.");
  
  // Allow numeric?
  typeArray[i++] = confirm("Do you want to include numbers in your password?\n\nChoose OK to include and Canel to exclude.");

  // Allow special characters?
  typeArray[i] = confirm("Do you want to include special characters in your password?\n\nChoose OK to include and Canel to exclude.");

  console.log(typeArray);
  return typeArray;
}

// query length and check if valid ***
// query lowercase ***
// query uppercase ***
// query numeric ***
// query special characters ***
// verify selection criteria (validate at least one criteria is chosen)
// continue prompting until selection criteria satisfied
// based on selection, build selection array
// for the length of the password, randomly select from the selection array and build the password string
// write password to alert
// write password to screen
