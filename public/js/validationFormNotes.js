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
        titleError.innerText = "Field is required";
    } else if(!checkTextLengthRange(titleInput.value, 5, 80)) {
        valid = false;
        titleInput.classList.add("error-input");
        titleError.innerText = "Field should contain 5-80 characters";
    }

    if(!checkRequired(descriptionInput.value)) {
        valid = false;
        descriptionInput.classList.add("error-input");
        descriptionError.innerText = "Field is required";
    } else if(!checkTextLengthRange(descriptionInput.value, 5, 400)) {
        valid = false;
        descriptionInput.classList.add("error-input");
        descriptionError.innerText = "Field should contain 5-400 characters";
    }

    if(!valid) {
        summaryError.innerText = "Form contains errors";
        summaryError.classList.remove("hidden-error");
    }

    return valid;
}

const implementationInput = document.querySelector('#implementation');

document.addEventListener('DOMContentLoaded', () => {
    implementationInput.valueAsDate = new Date();
    implementationInput.setAttribute("min", implementationInput.value);
}, false);

// const form = document.querySelector("#form");

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     validateForm();
// }, false)