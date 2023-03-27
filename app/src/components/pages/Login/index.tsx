import Link from "next/link";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@/components/Button";
import Header from "@/components/Header";
import Input from "@/components/Input";
import Loading from "@/components/Loading";
import { useGlobalContext } from "@/contexts/GlobalContext";
import { StyledLoginPage, StyledContent } from "./styles";

const schema = yup.object({
  login: yup.string().required("Login é obrigatório"),
  password: yup.string().required("Senha é obrigatório"),
});

const LoginPage = () => {
  const { login } = useGlobalContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  return (
    <div
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
        </StyledContent>
      </StyledLoginPage>
      <Loading />
    </div>
  );
};

export default LoginPage;
