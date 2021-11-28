// for form validation - getting the user inputs
const userName = document.getElementById("contact-user-name")
const userEmail = document.getElementById("contact-user-email")
const userMessage = document.getElementById("contact-user-message")

const form = document.getElementById("validated-form")
const errorArea = document.getElementsByClassName("contact-form-error")[0]


form.addEventListener('submit', (e) => {
    let messages = [];
    let emailInput = userEmail.value;
    let nameInput = userName.value;

    userName.value = nameInput.replace(' ', '_');

    // not letting the form submit if it contains ' ' in email or it doesnt contain @ or . in email - deprecated
    // if ( ! searchCharInString( emailInput, "@") || searchCharInString( emailInput, " ") || ! searchCharInString( emailInput, ".")) {
    //     messages.push( 'Invalid Email');
    // }

    if (!validateEmail(emailInput)) {
        messages.push('Invalid Email');
    }

    if (userMessage.value == "null" || userMessage.value.length == 0) {
        messages.push('Empty message recorded')
    }

    if (messages.length > 0) {
        e.preventDefault()
        alert(messages.join('\n'))
            // gsap.to( submitButton, {duration: 1, ease: 'elas.easeInOut'})
    } else {
        alert("Message received! We will contact you soon.")
    }

})

function validateEmail(elementValue) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(elementValue);
}


function searchCharInString(inputString, toFindChar) {
    // function returns false if character not found else returns true
    for (let i = 0; i <= inputString.length; i++) {
        if (inputString[i] == toFindChar) {
            return true
        }
    }
    return false
}


// getting buttons for animation
const buttonArray = document.getElementsByClassName('contact-form-button')
const messageButton = buttonArray[0]
    // const submitButton = buttonArray[1]

const contactForm = document.getElementsByClassName('contact-form')[0]
const contactMap = document.getElementsByClassName('contact-map')[0]

const formElement = document.getElementById('validated-form')
    // console.log( formElement)

// adding functionality as mentioned
messageButton.onclick = function() {

    if (messageButton.innerText == "Submit") {
        // submitting form 
        contactForm.submit()
            // removing submit properties
        messageButton.innerText = "Message Us";
        messageButton.removeAttribute("type");
        messageButton.removeAttribute("form");
        messageButton.removeAttribute("value");
        contactForm.classList.toggle("contact-form-animation");
    } else {
        // // resetting form to remove old data 
        formElement.reset()
            // making message form a submit button 
        messageButton.innerText = "Submit";
        messageButton.setAttribute("type", "submit");
        messageButton.setAttribute("form", "validated-form");
        messageButton.setAttribute("value", "Submit");

        // contactForm.classList.toggle( "no-display");
        contactForm.classList.toggle("contact-form-animation");
    }





}