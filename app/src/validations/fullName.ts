import * as yup from "yup";

const fullNameSchema = yup.object({
  fullName: yup.string().required("Nome Completo é obrigatório"),
});

export default fullNameSchema;
