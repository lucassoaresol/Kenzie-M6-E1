import * as yup from "yup";

const phoneNumberSchema = yup.object({
  phoneNumber: yup
    .string()
    .matches(/^[0-9]+$/, { message: "Digite apenas números" })
    .required("Contato é obrigatório"),
});

export default phoneNumberSchema;
