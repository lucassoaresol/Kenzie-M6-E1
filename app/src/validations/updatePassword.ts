import * as yup from "yup";

const updatePasswordSchema = yup.object({
  oldPassword: yup.string().required("Senha atual é obrigatório"),
  password: yup.string().required("Nova senha é obrigatório"),
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref("password")],
      "Confirmação de senha deve ser igual a senha"
    ),
});

export default updatePasswordSchema;
