/* eslint-disable react-hooks/exhaustive-deps */
import Link from "next/link";
import * as yup from "yup";
import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@/components/Button";
import Header from "@/components/Header";
import Input from "@/components/Input";
import Loading from "@/components/Loading";
import { StyledRegisterPage, StyledContent, StyledList } from "./styles";
import ErrorsMessage from "@/components/Input/ErrorsMessage";
import { useGlobalContext } from "@/contexts/GlobalContext";

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
    .required("Must have fields")
    .min(1, "Minimum of 1 field"),
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
    .required("Must have fields")
    .min(1, "Minimum of 1 field"),
});

const RegisterPage = () => {
  const { createUser } = useGlobalContext();
  let message: (
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined
  )[] = [];

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
      <StyledRegisterPage>
        <Header />
        <StyledContent>
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
                <h3>Lista de Email</h3>
                <button
                  type="button"
                  onClick={() => {
                    listEmail.append({ email: "" });
                  }}
                >
                  Adicionar
                </button>
              </li>
              {listEmail.fields.map((item, index) => {
                if (errors.listEmail) {
                  message[0] = errors.listEmail[index]?.email?.message;
                }
                return (
                  <li key={item.id}>
                    <div>
                      <input
                        placeholder="Digite aqui seu email"
                        {...register(`listEmail.${index}.email`)}
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        listEmail.remove(index);
                      }}
                    >
                      Remover
                    </button>
                  </li>
                );
              })}
              <li>
                <ErrorsMessage message={message[0]} />
              </li>
            </StyledList>
            <StyledList>
              <li>
                <h3>Lista de Contato</h3>
                <button
                  type="button"
                  onClick={() => {
                    listPhoneNumber.append({ phoneNumber: "" });
                  }}
                >
                  Adicionar
                </button>
              </li>
              {listPhoneNumber.fields.map((item, index) => {
                if (errors.listPhoneNumber) {
                  message[1] =
                    errors.listPhoneNumber[index]?.phoneNumber?.message;
                }
                return (
                  <li key={item.id}>
                    <div>
                      <input
                        placeholder="Digite aqui seu contato"
                        {...register(`listPhoneNumber.${index}.phoneNumber`)}
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        listPhoneNumber.remove(index);
                      }}
                    >
                      Remove
                    </button>
                  </li>
                );
              })}
              <li>
                <ErrorsMessage message={message[1]} />
              </li>
            </StyledList>
            <Button name="Cadastrar" type="submit" caseButton="primary" />
          </form>
        </StyledContent>
      </StyledRegisterPage>
      <Loading />
    </div>
  );
};

export default RegisterPage;
