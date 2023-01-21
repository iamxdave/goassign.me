function validateForm() {
    const userInput = document.querySelector('#user');
    const noteInput = document.querySelector('#note');

    const userError = document.querySelector('#errorUser');
    const reqUserNotEmpty = document.querySelector('#userMsgNotEmpty').innerText;

    const noteError = document.querySelector('#errorNote');
    const reqNoteNotEmpty = document.querySelector('#noteMsgNotEmpty').innerText;

    const summaryError = document.querySelector("#errorSummary");
    const reqSummary = document.querySelector('#summaryMsg').innerText;

    resetErrors([userInput, noteInput], [userError, noteError], summaryError);
    let valid = true;

    if(!checkRequired(userInput.value) || userInput.value == "default") {
        valid = false;
        userInput.classList.add("error-input");
        userError.innerText = reqUserNotEmpty;
    }

    if(!checkRequired(noteInput.value) || noteInput.value == "default") {
        valid = false;
        noteInput.classList.add("error-input");
        noteError.innerText = reqNoteNotEmpty;
    }

    if(!valid) {
        summaryError.innerText = reqSummary;
        summaryError.classList.remove("hidden-error");
    }

    return valid;
}
