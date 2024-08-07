export default function validation(values) {
    let errors = {};

    if (!values.name.trim()) {
        errors.name = "Name required";
    }

    if (!values.email) {
        errors.email = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email address is invalid";
    }

    if (!values.password) {
        errors.password = "Password required";
    } else if (values.password.length < 6) {
        errors.password = "Password needs to be 6 characters or more";
    }

    return errors;
}
