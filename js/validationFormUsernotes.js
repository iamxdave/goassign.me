function validateForm() {
    const userInput = document.querySelector('#user');
    const noteInput = document.querySelector('#note');

    const userError = document.querySelector('#errorUser');
    const noteError = document.querySelector('#errorNote');
    const summaryError = document.querySelector("#errorSummary");


    resetErrors([userInput, noteInput], [userError, noteError], summaryError);
    let valid = true;

    if(!checkRequired(userInput.value) || userInput.value == "default") {
        valid = false;
        userInput.classList.add("error-input");
        userError.innerText = "Field is required";
    }

    if(!checkRequired(noteInput.value) || noteInput.value == "default") {
        valid = false;
        noteInput.classList.add("error-input");
        noteError.innerText = "Field is required";
    }

    if(!valid) {
        summaryError.innerText = "Form contains errors";
        summaryError.classList.remove("hidden-error");
    }

    return valid;
}
