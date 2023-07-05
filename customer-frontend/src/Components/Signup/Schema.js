import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const CustomerSchema = Yup.object({
    firstname: Yup.string().required("Please enter your firstname").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ").min(2, "Too Short").max(40, "Too Long"),
    lastname: Yup.string().required("Please enter your lastname").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ").min(2, "Too Short").max(40, "Too Long"),
    contact: Yup.string()
        .required("Please enter your phone number")
        .matches(phoneRegExp, 'Phone number is not valid')
        .min(10, "too short")
        .max(10, "too long"),
    state: Yup.string()
        .required("Please fill the state field"),
    city: Yup.string()
        .required("Please fill the city field"),
    address: Yup.string().min(2, "Too Short").max(125, "Too Long"),
    password: Yup.string().required("Please enter your password").min(6, "Too Short").max(20, "Too Long"),
    confirmpassword: Yup.string().required("Please Confirm your password").min(6, "Too Short").max(20, "Too Long").oneOf([Yup.ref('password'), null], 'Passwords must match')
});

