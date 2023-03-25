import Header from "../Header";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledContent, StyledLoginPage } from "./styles";
import { Inter } from "next/font/google";
import Input from "../Input";

const inter = Inter({ subsets: ["latin"] });

const schema = yup.object({
  login: yup.string().required("Login é obrigatório"),
  password: yup.string().required("Senha é obrigatório"),
});

const LoginPage = () => {
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
              id="login"
              name="Login"
              placeholder="Digite aqui seu login"
              register={register("login")}
              errors={errors}
            />
            <Input
              id="password"
              name="Senha"
              placeholder="Digite aqui sua senha"
              register={register("password")}
              errors={errors}
              isPassword
            />
            <button type="submit">Entrar</button>
          </form>
        </StyledContent>
      </StyledLoginPage>
    </div>
  );
};

export default LoginPage;
