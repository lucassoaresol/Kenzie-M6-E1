import Header from "../Header";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Inter } from "next/font/google";
import Input from "../Input";
import { StyledContent, StyledLoginPage } from "../LoginPage/styles";

const inter = Inter({ subsets: ["latin"] });

const schema = yup.object({
  password: yup
    .string()
    .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
    .matches(/[a-z]/, "Deve conter ao menos 1 letra minuscula")
    .matches(/(\d)/, "Deve conter ao menos um número")
    .matches(/(\W)|_/, "Deve conter um caracter especial")
    .matches(/.{8,}/, "Deve ter no minimo 8 digitos")
    .required("Senha é obrigatório"),
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref("password")],
      "Confirmação de senha deve ser igual a senha"
    ),
});

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  return (
    <div
      className={inter.className}
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StyledLoginPage>
        <Header />
        <StyledContent>
          <h2>Login</h2>
          <form
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
          >
            <Input
              id="password"
              name="Senha"
              placeholder="Digite aqui sua senha"
              register={register("password")}
              errors={errors}
              isPassword
            />
            <Input
              id="confirmPassword"
              name="Confirmar Senha"
              placeholder="Digite aqui sua senha"
              register={register("confirmPassword")}
              errors={errors}
              isPassword
              isConfirm
            />
            <button type="submit">Entrar</button>
          </form>
        </StyledContent>
      </StyledLoginPage>
    </div>
  );
};

export default RegisterPage;
