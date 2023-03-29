import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Button from "@/components/Button";
import Header from "@/components/Header";
import Input from "@/components/Input";
import { StyledPage } from "@/styles/pages";
import { StyledLoginPage } from "./styles";
import { useUserContext } from "@/contexts/UserContext";
import loginSchema from "@/validations/login";

const LoginPage = () => {
  const { login } = useUserContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <StyledPage>
        <Header />
        <StyledLoginPage>
          <h2>Login</h2>
          <form onSubmit={handleSubmit(login)}>
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
            <Button name="Entrar" type="submit" caseButton="primary" />
          </form>

          <div>
            <Link href="/register">Ainda não possui uma conta?</Link>
            <Button
              name="Cadastre-se"
              type="button"
              isLink
              location="/register"
            />
          </div>
        </StyledLoginPage>
      </StyledPage>
    </div>
  );
};

export default LoginPage;
