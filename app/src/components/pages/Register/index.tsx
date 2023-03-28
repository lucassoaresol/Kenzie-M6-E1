import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, useFieldArray } from "react-hook-form";
import { VscAdd, VscRemove } from "react-icons/vsc";
import Button from "@/components/Button";
import Header from "@/components/Header";
import Input from "@/components/Input";
import Text from "@/components/Input/Text";
import ErrorsMessage from "@/components/Input/ErrorsMessage";
import Loading from "@/components/Loading";
import StyledPage from "@/styles/pages";
import { StyledRegisterPage, StyledList } from "./styles";
import { useUserContext } from "@/contexts/UserContext";

const schema = yup.object({
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

const RegisterPage = () => {
  const { createUser } = useUserContext();
  let message: (string | undefined)[] = [];

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      username: "",
      password: "",
      confirmPassword: "",
      listEmail: [{ email: "" }],
      listPhoneNumber: [{ phoneNumber: "" }],
    },
    resolver: yupResolver(schema),
  });

  const listEmail = useFieldArray({
    control,
    name: "listEmail",
  } as never);
  const listPhoneNumber = useFieldArray({
    control,
    name: "listPhoneNumber",
  } as never);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <StyledPage style={{ maxWidth: "500px" }}>
        <Header isRegister />
        <StyledRegisterPage>
          <h2>Crie sua conta</h2>
          <p>Rapido e grátis, vamos nessa</p>
          <form onSubmit={handleSubmit(createUser)}>
            <Input
              id="fullName"
              name="Nome Completo"
              placeholder="Digite aqui seu nome completo"
              register={register("fullName")}
              errors={errors}
            />
            <Input
              id="username"
              name="Login"
              placeholder="Digite aqui seu login"
              register={register("username")}
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
            <Input
              id="confirmPassword"
              name="Confirmar senha"
              placeholder="Digite novamente sua senha"
              register={register("confirmPassword")}
              errors={errors}
              isConfirm
            />
            <StyledList>
              <li>
                <div>
                  <h3>Lista de Email</h3>
                  <button
                    type="button"
                    onClick={() => {
                      listEmail.append({ email: "" });
                    }}
                  >
                    <VscAdd />
                  </button>
                </div>
              </li>
              {listEmail.fields.map((item, index) => {
                if (errors.listEmail) {
                  message[0] = errors.listEmail[index]?.email?.message;
                }
                return (
                  <li key={item.id}>
                    <div>
                      <Text
                        placeholder="Digite aqui seu email"
                        register={register(`listEmail.${index}.email`)}
                      />
                      <button
                        type="button"
                        onClick={() => {
                          listEmail.remove(index);
                        }}
                      >
                        <VscRemove />
                      </button>
                    </div>
                    <ErrorsMessage message={message[0]} />
                  </li>
                );
              })}
            </StyledList>
            <StyledList>
              <li>
                <div>
                  <h3>Lista de Contato</h3>
                  <button
                    type="button"
                    onClick={() => {
                      listPhoneNumber.append({ phoneNumber: "" });
                    }}
                  >
                    <VscAdd />
                  </button>
                </div>
              </li>
              {listPhoneNumber.fields.map((item, index) => {
                if (errors.listPhoneNumber) {
                  message[1] =
                    errors.listPhoneNumber[index]?.phoneNumber?.message;
                }
                return (
                  <li key={item.id}>
                    <div>
                      <Text
                        placeholder="Digite aqui seu contato"
                        register={register(
                          `listPhoneNumber.${index}.phoneNumber`
                        )}
                      />
                      <button
                        type="button"
                        onClick={() => {
                          listPhoneNumber.remove(index);
                        }}
                      >
                        <VscRemove />
                      </button>
                    </div>
                    <ErrorsMessage message={message[1]} />
                  </li>
                );
              })}
            </StyledList>
            <Button name="Cadastrar" type="submit" caseButton="primary" />
          </form>
        </StyledRegisterPage>
      </StyledPage>
      <Loading />
    </div>
  );
};

export default RegisterPage;
