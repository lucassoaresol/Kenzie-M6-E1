import * as yup from "yup";

const usernameSchema = yup.object({
  username: yup.string().required("Login é obrigatório"),
});

export default usernameSchema;
