function validateForm() {
    const usernameInput = document.querySelector('#username');
    const emailInput = document.querySelector('#email');
    const firstnameInput = document.querySelector('#firstname');
    const lastnameInput = document.querySelector('#lastname');

    const usernameError = document.querySelector('#errorUsername');
    const emailError = document.querySelector('#errorEmail');
    const firstnameError = document.querySelector('#errorFirstname');
    const lastnameError = document.querySelector('#errorLastname');
    const summaryError = document.querySelector("#errorSummary");

    let valid = true;

    const fileName = location.href.split("/").slice(-1);

    if(fileName != 'edit.html') {
        const passwordInput = document.querySelector('#password');
        const passwordError = document.querySelector('#errorPassword');
        resetErrors([usernameInput, emailInput, passwordInput, firstnameInput, lastnameInput], [usernameError, emailError, passwordError, firstnameError, lastnameError], summaryError);

        if(!checkRequired(passwordInput.value)) {
            valid = false;
            passwordInput.classList.add("error-input");
            passwordError.innerText = "Field is required";
        } else if(!checkTextLengthRange(passwordInput.value), 5, 60) {
            valid = false;
            passwordInput.classList.add("error-input");
            passwordError.innerText = "Field should contain 5-30 characters";
        }
    } else {
        resetErrors([usernameInput, emailInput, firstnameInput, lastnameInput], [usernameError, emailError, firstnameError, lastnameError], summaryError);
    }

    if(!checkRequired(usernameInput.value)) {
        valid = false;
        usernameInput.classList.add("error-input");
        usernameError.innerText = "Field is required";
    } else if(!checkTextLengthRange(usernameInput.value), 5, 60) {
        valid = false;
        usernameInput.classList.add("error-input");
        usernameError.innerText = "Field should contain 5-30 characters";
    }

    if(!checkRequired(emailInput.value)) {
        valid = false;
        emailInput.classList.add("error-input");
        emailError.innerText = "Field is required";
    } else if(!checkTextLengthRange(emailInput.value), 5, 60) {
        valid = false;
        emailInput.classList.add("error-input");
        emailError.innerText = "Field should contain 5-30 characters";
    } else if(!checkEmail(emailInput.value)) {
        valid = false;
        emailInput.classList.add("error-input");
        emailError.innerText = "Field should contain valid email format";
    }

    if(!checkRequired(firstnameInput.value)) {
        valid = false;
        firstnameInput.classList.add("error-input");
        firstnameError.innerText = "Field is required";
    } else if(!checkTextLengthRange(firstnameInput.value), 5, 60) {
        valid = false;
        firstnameInput.classList.add("error-input");
        firstnameError.innerText = "Field should contain 5-30 characters";
    }

    if(!checkRequired(lastnameInput.value)) {
        valid = false;
        lastnameInput.classList.add("error-input");
        lastnameError.innerText = "Field is required";
    } else if(!checkTextLengthRange(lastnameInput.value), 5, 60) {
        valid = false;
        lastnameInput.classList.add("error-input");
        lastnameError.innerText = "Field should contain 5-30 characters";
    }

    if(!valid) {
        summaryError.innerText = "Form contains errors";
        summaryError.classList.remove("hidden-error");
    }

    return valid;
}
