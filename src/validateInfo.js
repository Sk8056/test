export default function validateInfo(values) {
    let errors = {}

    if (!values.username.trim()) {
        errors.username = "Username required";
    }

    if (!values.email) {
        errors.email = "Email required";
    } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(values.email)) {
        errors.email = "Email address is invalid"
    }

    if (!values.password) {
        errors.password = "Password is required"
    } else if (values.password.length < 6) {
        errors.password = "Password needs to be 6 characters or more";
    }

    if (!values.password2) {
        errors.password2 = "Password is required";
    } else if (values.password !== values.password2) {
        errors.passwords2 = "Passwords does not match"
    }

    return errors;
}