import * as yup from "yup";

export const ResetSchema = yup.object().shape({
  email: yup.string().required("Email Required"),
});
