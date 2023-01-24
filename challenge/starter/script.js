// User input variables: 
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;


// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


// Add event listener to generate button
// generateBtn.addEventListener('click', writePassword);

var get = document.querySelector("#generate");
get.addEventListener("click", function () {
    newps = generatePassword();
    document.getElementById("password").placeholder = newps;
});

//Function to generate a password with user's input
    function generatePassword() {
        // Asks user input
        enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
      
        if (!enter) {
            alert("This needs a value in order to proceed");
        } else if (enter < 8 || enter > 128) {
          
            enter = parseInt(prompt("You must choose between 8 and 128"));
           
    
        } else {
            // Continues once user input is validated 1-4
            confirmNumber = confirm("Would you like your password to contain numbers?");
            confirmCharacter = confirm("Would you like your password to contain special characters?");
            confirmUppercase = confirm("Would you like your password to contain Uppercase letters?");
            confirmLowercase = confirm("Would you like your password to contain Lowercase letters?");
        };
    
        // Else if for 4 negative options
        if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
            choices = alert("You must choose at least one criteria!");
    
        }
        // First if statement that uses user input prompts to determine choices
        // Else if for 4 positive options
        else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
    
            choices = specialCharacters.concat(numericCharacters, lowerCasedCharacters, upperCasedCharacters);
        }
        // Else if for 3 positive options
        else if (confirmCharacter && confirmNumber && confirmUppercase) {
            choices = specialCharacters.concat(numericCharacters, upperCasedCharacters);
        }
        else if (confirmCharacter && confirmNumber && confirmLowercase) {
            choices = specialCharacters.concat(numericCharacters, lowerCasedCharacters);
        }
        else if (confirmCharacter && confirmLowercase && confirmUppercase) {
            choices = specialCharacters.concat(lowerCasedCharacters, upperCasedCharacters);
        }
        else if (confirmNumber && confirmLowercase && confirmUppercase) {
            choices = numericCharacters.concat(lowerCasedCharacters, upperCasedCharacters);
        }
        
        else if (confirmCharacter && confirmNumber) {
            choices = specialCharacters.concat(numericCharacters);
    
        } else if (confirmCharacter && confirmLowercase) {
            choices = specialCharacters.concat(lowerCasedCharacters);
    
        } else if (confirmCharacter && confirmUppercase) {
            choices = specialCharacters.concat(upperCasedCharacters);
        }
        else if (confirmLowercase && confirmNumber) {
            choices = lowerCasedCharacters.concat(numericCharacters);
    
        } else if (confirmLowercase && confirmUppercase) {
            choices = lowerCasedCharacters.concat(upperCasedCharacters);
    
        } else if (confirmNumber && confirmUppercase) {
            choices = numericCharacters.concat(upperCasedCharacters);
        }
       
        else if (confirmCharacter) {
            choices = specialCharacters;
        }
        else if (confirmNumber) {
            choices = numericCharacters;
        }
        else if (confirmLowercase) {
            choices = lowerCasedCharacters;
        }
       
        else if (confirmUppercase) {
            choices = (upperCasedCharacters);
        };
    
        var password = [];
    
       
        // Random selection of all variables: 
        for (var i = 0; i < enter; i++) {
            var pickChoices = choices[Math.floor(Math.random() * choices.length)];
            password.push(pickChoices);
        }
      
        var newps = password.join("");
        UserInput(newps);
        return newps;
    }
    // password into the textbox
    
    function UserInput(newps) {
        document.getElementById("password").textContent = newps;
    
    }
    
    var copy = document.querySelector("#copy");
    copy.addEventListener("click", function () {
        copyPassword();
    });
    



// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

