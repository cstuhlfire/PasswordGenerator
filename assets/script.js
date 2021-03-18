// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//************************************************************************ */
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//************************************************************************ */
// Function - Prompt user for password preferences and build password
// Returns pw (password)
function generatePassword() {
  let pw = ""; //string for building password
  
  let len = promptPasswordLength();
  
  // If the user did not cancel, prompt for the other criteria
  if (len !== null){
    let userChoices = getChoices();
    console.log(userChoices);
  }
  
  return pw;
}

//************************************************************************ */
// Funtion - Prompt for password length and check if valid number
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

//************************************************************************ */
// Function - Gets user choices for password generation and verifies a selection is made.
// Returns userChoices object
function getChoices () {
  let userChoices = promptCharTypes();

  // If no characters are chosen prompt user to choose or cancel
  if (userChoices.lowerCase &&
    userChoices.upperCase &&
    userChoices.numbers &&
    userChoices.special) {
      // User has chosen at least one character set
      return userChoices;
  }
  else {
    let letsContinue = true;
    
    // User has not selected a character set
    while (letsContinue && 
      !userChoices.lowerCase &&
      !userChoices.upperCase &&
      !userChoices.numbers &&
      !userChoices.special) {
        
        letsContinue = confirm("You must choose at least one character type for your password.\n\nDo you want to continue to generate a password?");
        
        if (letsContinue) {
          // User has chosen to continue generating a password
          userChoices = promptCharTypes();
          return userChoices;
        }
        else {
          return userChoices;
        }
    }
  }
}
  

//************************************************************************ */
// Function - Prompt user for character preferences
// Returns userChoices object
function promptCharTypes() {
  let userChoices = {
    lowerCase: false,
    upperCase: false,
    numbers: false,
    special: false
  };

  // Allow lowercase?
  userChoices.lowerCase = confirm("Do you want to include lowercase letters in your password?\n\nChoose OK to include and Cancel to exclude.");

  // Allow uppercase?
  userChoices.upperCase = confirm("Do you want to include uppercase letters in your password?\n\nChoose OK to include and Cancel to exclude.");
  
  // Allow numeric?
  userChoices.numbers = confirm("Do you want to include numbers in your password?\n\nChoose OK to include and Cancel to exclude.");

  // Allow special characters?
  userChoices.special = confirm("Do you want to include special characters in your password?\n\nChoose OK to include and Cancel to exclude.");

  return userChoices;
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
