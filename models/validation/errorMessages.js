const errMessages = (errors) => {
    errors.forEach(err => {
        switch (err.code) {
            case "string.empty":
                err.message = "Field is required";
                break;
            case "string.min":
                err.message = `Field should contain min ${err.local.limit} symbols`;
                break;
            case "string.max":
                err.message = `Field should contain max ${err.local.limit} symbols`;
                break;
            case "string.equal":
                err.message = `Field should be equal to ${err.local.limit}`;
                break;
            case "string.greater":
                err.message = `Field should be greater than ${err.local.limit}`;
                break;
            case "string.email":
                err.message = "Field should has valid email format";
                break;
            case "string.uppercase":
                err.message = "Field should be uppercased";
                break;
        }
    });
}