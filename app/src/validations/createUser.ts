import * as yup from "yup";

const createUserSchema = yup.object({
  fullName: yup.string().required("Nome Completo é obrigatório"),
  username: yup.string().required("Login é obrigatório"),
  password: yup.string().required("Senha é obrigatório"),
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref("password")],
      "Confirmação de senha deve ser igual a senha"
    ),
  listEmail: yup
    .array()
    .of(
      yup.object({
        email: yup
          .string()
          .email("Email deve ser um email válido")
          .required("Email é obrigatório"),
      })
    )
    .required()
    .min(1),
  listPhoneNumber: yup
    .array()
    .of(
      yup.object({
        phoneNumber: yup
          .string()
          .matches(/^[0-9]+$/, { message: "Digite apenas números" })
          .required("Contato é obrigatório"),
      })
    )
    .required()
    .min(1),
});

export default createUserSchema;
