import * as yup from "yup";

export const updatepasswordSchema = yup.object().shape({
  password: yup.string().required("password required"),
  confirmPassword: yup.string().required("password required"),
});
