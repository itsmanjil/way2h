import * as yup from "yup";

export const schemaSignUp = yup.object().shape({
    name:yup.string().required("Name Require"),
    email: yup.string().required("Email Required"),
    password: yup.string().required("Password Required"),
  })