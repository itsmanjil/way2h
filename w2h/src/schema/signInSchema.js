import * as yup from "yup";

export const schemaSignIn = yup.object().shape({
    email: yup.string().required("Email Required"),
    password: yup.string().required("Password Required"),
  })