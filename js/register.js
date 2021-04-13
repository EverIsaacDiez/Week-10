// Getting elements by ID
var infoDivMail = document.getElementById('register-mail-validation')
var infoDivName = document.getElementById('register-name-validation')
var infoDivPassword = document.getElementById('register-password-validation')
var infoDivConfirmPassword = document.getElementById('register-cpassword-validation')
var infoDiv = document.getElementById('register-validation')
var registerButton = document.getElementById('register-button')
var formWillReset = document.getElementById('register-form')
var emailInput = document.getElementById('register-email')
var nameInput = document.getElementById('register-name')
var passwordInput = document.getElementById('register-password')
var confirmPasswordInput = document.getElementById('register-confirm-password')

// Getting elements from tagname
var formExistence = document.getElementsByTagName('form')
var labelsQuantity = document.getElementsByTagName('Label')
var inputsQuantity = document.getElementsByTagName('input')
var buttonsQuantity = document.getElementsByTagName('button')

// Variables to send validation messages
var ValidationsOk = ''

// Add events to elements
emailInput.addEventListener("blur", validateBlurEmailText)
nameInput.addEventListener("blur", validateBlurNameText)
passwordInput.addEventListener("blur", validateBlurPasswordText)
confirmPasswordInput.addEventListener("blur", validateBlurConfirmPasswordText)
emailInput.addEventListener("focus", validateFocusEmailText)
nameInput.addEventListener("focus", validateFocusNameText)
passwordInput.addEventListener("focus", validateFocusPasswordText)
confirmPasswordInput.addEventListener("focus", validateFocusConfirmPasswordText)
registerButton.addEventListener('click', validationsOk)
registerButton.addEventListener('click', getEmail)

// Validations of email (blur event)
function validateBlurEmailText() {

  if (emailInput.value === "" || emailInput.value === null) {
    infoDivMail.style.display = "block"
    infoDivMail.style.color = "red"
    infoDivMail.innerText = "Email field is empty"
    return;
  }
  if (!isEmail(emailInput.value)) {
    infoDivMail.style.display = "block"
    infoDivMail.style.color = "red"
    infoDivMail.innerText = "Email field is empty"
    return;
    }
}

// Validations of email (focus event)
function validateFocusEmailText() {
    infoDivMail.style.display = "none"
}

// Validations of name (blur event)
function validateBlurNameText() {

    if (nameInput.value === "" || nameInput.value === null) {
        infoDivName.style.display = "block"
        infoDivName.style.color = "red"
        infoDivName.innerText = "Name field is empty"
        return;
    }
    if (nameInput.value.search(/\s/g) <= 0) {
        infoDivName.style.display = "block"
        infoDivName.style.color = "red"
        infoDivName.innerText = "Name field is empty"
        return;
    }
}

// Validations of name (focus event)
function validateFocusNameText() {

    infoDivName.style.display = "none"
}

// Validations of password (blur event)
function validateBlurPasswordText() {

    if (passwordInput.value === "" || passwordInput.value === null) {
        infoDivPassword.style.display = "block"
        infoDivPassword.style.color = "red"
        infoDivPassword.innerText = "Password field is empty"
        return;
    }
    if (passwordInput.value.search(/[a-z]/) < 0) {
        infoDivPassword.style.display = "block"
        infoDivPassword.style.color = "red"
        infoDivPassword.innerText = "Password must contain at least one lowercase letter"
        return;
    }
    if (passwordInput.value.search(/[A-Z]/) < 0) {
        infoDivPassword.style.display = "block"
        infoDivPassword.style.color = "red"
        infoDivPassword.innerText = "Password must contain at least one uppercase letter"
        return;
    }
    if (passwordInput.value.search(/[0-9]/) < 0) {
        infoDivPassword.style.display = "block"
        infoDivPassword.style.color = "red"
        infoDivPassword.innerText = "Password must contain at least one number "
        return;
    }
    if (passwordInput.value.length < 8) {
        infoDivPassword.style.display = "block"
        infoDivPassword.style.color = "red"
        infoDivPassword.innerText = "Password must have at least 8 characters"
        return;
    }
}

// Validations of password (focus event)
function validateFocusPasswordText() {

    if (passwordInput.value === "" || passwordInput.value === null) {
        infoDivPassword.style.display = "none"
        return;
    }
    if (passwordInput.value.search(/[a-z]/) < 0) {
        infoDivPassword.style.display = "none"
        return;
    }
    if (passwordInput.value.search(/[A-Z]/) < 0) {
        infoDivPassword.style.display = "none"
        return;
    }
    if (passwordInput.value.search(/[0-9]/) < 0) {
        infoDivPassword.style.display = "none"
        return;
    }
    if (passwordInput.value.length >= 8) {
        infoDivPassword.style.display = "none"
        return;
    }

}

// Validations of confirm password (blur event)
function validateBlurConfirmPasswordText() {

    if (confirmPasswordInput.value === "" || confirmPasswordInput.value === null) {
        infoDivConfirmPassword.style.display = "block"
        infoDivConfirmPassword.style.color = "red"
        infoDivConfirmPassword.innerText = "Confirm password field is empty"
        return;
    }
    if (confirmPasswordInput.value !== passwordInput.value) {
        infoDivConfirmPassword.style.display = "block"
        infoDivConfirmPassword.style.color = "red"
        infoDivConfirmPassword.innerText = "Passwords must match"
        return;
    }
}

// Validations of confirm password (focus event)
function validateFocusConfirmPasswordText() {

    infoDivConfirmPassword.style.display = "none"
    return;
}

// Validations on "register" button
function validationsOk() {

    // Validate if in the HTML document exist a form
    if (formExistence.length === 0) {
        infoDiv.style.display = "block"
        infoDiv.style.color = "red"
        infoDiv.innerText = "Form tag doesn't exist in the html document"
        return;
    }

    // Validate the quantity of labels tags are in the document
    if (labelsQuantity.length !== 4) {
        infoDiv.style.display = "block"
        infoDiv.style.color = "red"
        infoDiv.innerText = "There aren't the enoght quantity of label tags in the document"
        return;
    }

    // Validate the quantity of buttons are in the document
    if (buttonsQuantity.length !== 2) {
        infoDiv.style.display = "block"
        infoDiv.style.color = "red"
        infoDiv.innerText = "There aren't the enoght quantity of button tags in the document"
        return;
    }

    // Validate the quantity of inputs tags are in the document
    if (inputsQuantity.length !== 4) {
        infoDiv.style.display = "block"
        infoDiv.style.color = "red"
        infoDiv.innerText = "There aren't the enoght quantity of inputs tags in the document"
        return;
    }

  // Validate if the email input contains text 
  if (emailInput.value === "" || emailInput.value === null || !isEmail(emailInput.value)) {
    return;
  }
    if (nameInput.value === "" || nameInput.value === null) {
        return;
    }
    // Validate if the password input contains text
    if (passwordInput.value === "" || passwordInput.value === null) {
        return;
    }
    // Validate if the confirm-password input contains text
    if (confirmPasswordInput.value === "" || confirmPasswordInput.value === null) {
        return;
    }
    // Validate if the confirm-password match with the password
    if (confirmPasswordInput.value !== passwordInput.value) {
        return;
    }
    // all validations passed
    else {
        infoDiv.style.display = "block"
        infoDiv.style.color = "green"
        infoDiv.innerText = `Registered Succesfully. Your account data is: ${emailInput.value} ${nameInput.value} ${passwordInput.value.type = "******"} ${confirmPasswordInput.value.type = "******"}`
        return;
    }
}

//function to test if an email is invalid
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}

// Reset fields function
function cleanForm() {
    formWillReset.reset();
}

// Request HTTP through GET method
async function getEmail() {
    if (emailInput.value !== "" && emailInput.value !== null && passwordInput.value !== "" && passwordInput.value) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users?email=${emailInput.value}`, {
                method: 'get',
            });
            console.log('Completed', response);
        } catch (err) {
            console.error(`Error: ${err}`);
        }
    }

}





