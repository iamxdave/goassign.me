function validateForm() {
    const titleInput = document.querySelector('#title');
    const descriptionInput = document.querySelector('#description');

    const titleError = document.querySelector('#errorTitle');
    const reqTitleNotEmpty = document.querySelector('#titleMsgNotEmpty').innerText;
    const reqTitleLen = document.querySelector('#titleMsgLen').innerText;
    
    const descriptionError = document.querySelector('#errorDescription');
    const reqDescriptionNotEmpty = document.querySelector('#descriptionMsgNotEmpty').innerText;
    const reqDescriptionLen = document.querySelector('#descriptionMsgLen').innerText;

    const summaryError = document.querySelector("#errorSummary");
    const reqSummary = document.querySelector('#summaryMsg').innerText;

    resetErrors([titleInput, descriptionInput], [titleError, descriptionError], summaryError);
    let valid = true;

    if(!checkRequired(titleInput.value)) {
        valid = false;
        titleInput.classList.add("error-input");
        titleError.innerText = reqTitleNotEmpty;
    } else if(!checkTextLengthRange(titleInput.value, 5, 80)) {
        valid = false;
        titleInput.classList.add("error-input");
        titleError.innerText = reqTitleLen;
    }

    if(!checkRequired(descriptionInput.value)) {
        valid = false;
        descriptionInput.classList.add("error-input");
        descriptionError.innerText = reqDescriptionNotEmpty;
    } else if(!checkTextLengthRange(descriptionInput.value, 5, 400)) {
        valid = false;
        descriptionInput.classList.add("error-input");
        descriptionError.innerText = reqDescriptionLen;
    }

    if(!valid) {
        summaryError.innerText = reqSummary;
        summaryError.classList.remove("hidden-error");
    }

    return valid;
}

