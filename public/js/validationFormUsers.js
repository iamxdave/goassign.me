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
        resetErrors([usernameInput, emailInput, firstnameInput, lastnameInput], [usernameError, emailError, firstnameError, lastnameError], summaryError);
    } else {
        resetErrors([usernameInput, emailInput, firstnameInput, lastnameInput], [usernameError, emailError, firstnameError, lastnameError], summaryError);
    }

    if(!checkRequired(usernameInput.value)) {
        valid = false;
        usernameInput.classList.add("error-input");
        usernameError.innerText = "Username is required";
    } else if(!checkTextLengthRange(usernameInput.value, 2, 30)) {
        valid = false;
        usernameInput.classList.add("error-input");
        usernameError.innerText = "Username should contain 2-30 characters";
    }

    if(!checkRequired(emailInput.value)) {
        valid = false;
        emailInput.classList.add("error-input");
        emailError.innerText = "Email is required";
    } else if(!checkTextLengthRange(emailInput.value, 5, 30)) {
        valid = false;
        emailInput.classList.add("error-input");
        emailError.innerText = "Email should contain 5-30 characters";
    } else if(!checkEmail(emailInput.value)) {
        valid = false;
        emailInput.classList.add("error-input");
        emailError.innerText = "Email should contain valid email format";
    }

    if(!checkRequired(firstnameInput.value)) {
        valid = false;
        firstnameInput.classList.add("error-input");
        firstnameError.innerText = "Firstname is required";
    } else if(!checkTextLengthRange(firstnameInput.value, 2, 30)) {
        valid = false;
        firstnameInput.classList.add("error-input");
        firstnameError.innerText = "Firstname should contain 2-30 characters";
    }

    if(!checkRequired(lastnameInput.value)) {
        valid = false;
        lastnameInput.classList.add("error-input");
        lastnameError.innerText = "Lastname is required";
    } else if(!checkTextLengthRange(lastnameInput.value, 2, 30)) {
        valid = false;
        lastnameInput.classList.add("error-input");
        lastnameError.innerText = "Lastname should contain 2-30 characters";
    }

    if(!valid) {
        summaryError.innerText = "Form contains errors";
        summaryError.classList.remove("hidden-error");
    }

    return valid;
}
