// Assignment Code
// Define object to store user selections
let userChoices = {
  length: 0,
  lowerCase: false,
  upperCase: false,
  numbers: false,
  special: false
};

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

  resetChoices();
  promptPasswordLength();
  
  // If the user did not cancel, prompt for the other criteria
  if (userChoices.length !== null){
    getChoices();
    pw = buildPassword();

    return pw;
  }
  else {
    return pw;
  }
}

//************************************************************************ */
// Funtion - Reset userChoices object
function resetChoices(){
  userChoices = {
    length: 0,
    lowerCase: false,
    upperCase: false,
    numbers: false,
    special: false
  };
}

//************************************************************************ */
// Funtion - Build password based on  userChoices
function buildPassword(){
  let lowerArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  let upperArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  let numberArray = ["0","1","2","3","4","5","6","7","8","9"];
  let specialArray = ["!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];
  
  let selectionArray = [];
  let password = "";

  // Build selection array based on userChoices
  if (userChoices.lowerCase) {
    selectionArray = selectionArray.concat(lowerArray);
  }
  if(userChoices.upperCase) {
    selectionArray = selectionArray.concat(upperArray);
  }
  if(userChoices.numbers) {
    selectionArray = selectionArray.concat(numberArray);
  }
  if(userChoices.special) {
    selectionArray = selectionArray.concat(specialArray);
  }

  // For the length of the password, randomly choose an index for the selectionArray and add the value to the password
  for (let i = 0; i < userChoices.length; i++) {
    password = password + selectionArray[Math.floor(Math.random() * Math.floor(selectionArray.length))];
  }

  return password;
}

//************************************************************************ */
// Funtion - Prompt for password length and check if valid number
function promptPasswordLength() {
  
  //prompt user for number until input criteria is met
  while (isNaN(userChoices.length) || (userChoices.length < 8 || userChoices.length > 128)){
    userChoices.length = prompt("Enter the length of the password.\n\nMust be a number between 8 and 128.");
    
    // if the user cancels, return
    if (userChoices.length === null){
      return;
    }
  }
  return;
}

//************************************************************************ */
// Function - Gets user choices for password generation and verifies a selection is made.
function getChoices () {
  promptCharTypes();

  // If no characters are chosen prompt user to choose or cancel
  if (userChoices.lowerCase &&
    userChoices.upperCase &&
    userChoices.numbers &&
    userChoices.special) {
      // User has chosen at least one character set
      return;
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
          promptCharTypes();
          return;
        }
        else {
          return;
        }
    }
  }
}
  

//************************************************************************ */
// Function - Prompt user for character preferences
function promptCharTypes() {
  // Allow lowercase?
  userChoices.lowerCase = confirm("Do you want to include lowercase letters in your password?\n\nChoose OK to include and Cancel to exclude.");

  // Allow uppercase?
  userChoices.upperCase = confirm("Do you want to include uppercase letters in your password?\n\nChoose OK to include and Cancel to exclude.");
  
  // Allow numeric?
  userChoices.numbers = confirm("Do you want to include numbers in your password?\n\nChoose OK to include and Cancel to exclude.");

  // Allow special characters?
  userChoices.special = confirm("Do you want to include special characters in your password?\n\nChoose OK to include and Cancel to exclude.");

  return;
}

// query length and check if valid ***
// query lowercase ***
// query uppercase ***
// query numeric ***
// query special characters ***
// verify selection criteria (validate at least one criteria is chosen) ***
// continue prompting until selection criteria satisfied ***
// based on selection, build selection object ***
// for the length of the password, randomly select from the selection array and build the password string
// write password to alert
// write password to screen
