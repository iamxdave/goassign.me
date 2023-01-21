function validateForm() {
    const usernameInput = document.querySelector('#username');
    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');
    const firstnameInput = document.querySelector('#firstname');
    const lastnameInput = document.querySelector('#lastname');

    const usernameError = document.querySelector('#errorUsername');
    const reqUsernameNotEmpty = document.querySelector('#usernameMsgNotEmpty').innerText;
    const reqUsernameLen = document.querySelector('#usernameMsgLen').innerText;

    const emailError = document.querySelector('#errorEmail');
    const reqEmailNotEmpty = document.querySelector('#emailMsgNotEmpty').innerText;
    const reqEmailLen = document.querySelector('#emailMsgLen').innerText;
    const reqEmailIsEmail = document.querySelector('#emailMsgIsEmail').innerText;

    const passwordError = document.querySelector('#errorPassword');
    const reqPasswordNotEmpty = document.querySelector('#passwordMsgNotEmpty').innerText;
    const reqPasswordLen = document.querySelector('#passwordMsgLen').innerText;

    const firstnameError = document.querySelector('#errorFirstname');
    const reqFirstnameNotEmpty = document.querySelector('#firstnameMsgNotEmpty').innerText;
    const reqFirstnameLen = document.querySelector('#firstnameMsgLen').innerText;


    const lastnameError = document.querySelector('#errorLastname');
    const reqLastnameNotEmpty = document.querySelector('#lastnameMsgNotEmpty').innerText;
    const reqLastnameLen = document.querySelector('#lastnameMsgLen').innerText;

    const summaryError = document.querySelector("#errorSummary");
    const reqSummary = document.querySelector('#summaryMsg').innerText;

    let valid = true;

    const fileName = location.href.split("/").slice(-1);

    if(fileName != 'edit.html') {
        resetErrors([usernameInput, emailInput, firstnameInput, lastnameInput], [usernameError, emailError, firstnameError, lastnameError], summaryError);
    } else {
        resetErrors([usernameInput, emailInput, firstnameInput, lastnameInput], [usernameError, emailError, firstnameError, lastnameError], summaryError);
    }

    if(!checkRequired(usernameInput.value)) {
        valid = false;
        usernameInput.classList.add("error-input");
        usernameError.innerText = reqUsernameNotEmpty;
    } else if(!checkTextLengthRange(usernameInput.value, 2, 30)) {
        valid = false;
        usernameInput.classList.add("error-input");
        usernameError.innerText = reqUsernameLen;
    }

    if(!checkRequired(emailInput.value)) {
        valid = false;
        emailInput.classList.add("error-input");
        emailError.innerText = reqEmailNotEmpty;
    } else if(!checkTextLengthRange(emailInput.value, 5, 30)) {
        valid = false;
        emailInput.classList.add("error-input");
        emailError.innerText = reqEmailLen;
    } else if(!checkEmail(emailInput.value)) {
        valid = false;
        emailInput.classList.add("error-input");
        emailError.innerText = reqEmailIsEmail;
    }

    if(!checkRequired(passwordInput.value)) {
        valid = false;
        passwordInput.classList.add("error-input");
        passwordError.innerText = reqPasswordNotEmpty;
    } else if(!checkTextLengthRange(passwordInput.value, 7, 42)) {
        valid = false;
        passwordInput.classList.add("error-input");
        passwordError.innerText = reqPasswordLen;
    }

    if(!checkRequired(firstnameInput.value)) {
        valid = false;
        firstnameInput.classList.add("error-input");
        firstnameError.innerText = reqFirstnameNotEmpty;
    } else if(!checkTextLengthRange(firstnameInput.value, 2, 30)) {
        valid = false;
        firstnameInput.classList.add("error-input");
        firstnameError.innerText = reqFirstnameLen;
    }

    if(!checkRequired(lastnameInput.value)) {
        valid = false;
        lastnameInput.classList.add("error-input");
        lastnameError.innerText = reqLastnameNotEmpty;
    } else if(!checkTextLengthRange(lastnameInput.value, 2, 30)) {
        valid = false;
        lastnameInput.classList.add("error-input");
        lastnameError.innerText = reqLastnameLen;
    }

    if(!valid) {
        summaryError.innerText = reqSummary;
        summaryError.classList.remove("hidden-error");
    }

    return valid;
}
