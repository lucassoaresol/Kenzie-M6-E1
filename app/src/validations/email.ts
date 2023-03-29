import * as yup from "yup";

const emailSchema = yup.object({
  email: yup
    .string()
    .email("Email deve ser um email válido")
    .required("Email é obrigatório"),
});

export default emailSchema;
