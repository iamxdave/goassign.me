function validateForm() {
    const titleInput = document.querySelector('#title');
    const descriptionInput = document.querySelector('#description');

    const titleError = document.querySelector('#errorTitle');
    const descriptionError = document.querySelector('#errorDescription');
    const summaryError = document.querySelector("#errorSummary");


    resetErrors([titleInput, descriptionInput], [titleError, descriptionError], summaryError);
    let valid = true;

    if(!checkRequired(titleInput.value)) {
        valid = false;
        titleInput.classList.add("error-input");
        titleError.innerText = "Title is required";
    } else if(!checkTextLengthRange(titleInput.value, 5, 80)) {
        valid = false;
        titleInput.classList.add("error-input");
        titleError.innerText = "Title should contain 5-80 characters";
    }

    if(!checkRequired(descriptionInput.value)) {
        valid = false;
        descriptionInput.classList.add("error-input");
        descriptionError.innerText = "Description is required";
    } else if(!checkTextLengthRange(descriptionInput.value, 5, 400)) {
        valid = false;
        descriptionInput.classList.add("error-input");
        descriptionError.innerText = "Description should contain 5-400 characters";
    }

    if(!valid) {
        summaryError.innerText = "Form contains errors";
        summaryError.classList.remove("hidden-error");
    }

    return valid;
}

