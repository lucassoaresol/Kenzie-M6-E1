import * as yup from "yup";

const loginSchema = yup.object({
  login: yup.string().required("Login é obrigatório"),
  password: yup.string().required("Senha é obrigatório"),
});

export default loginSchema;
