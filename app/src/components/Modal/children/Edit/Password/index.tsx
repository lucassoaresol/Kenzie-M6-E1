import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, useForm } from "react-hook-form";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { StyledEdit } from "../styles";

interface iEditPasswordProps {
  schema: any;
  send: (data: FieldValues) => Promise<void>;
}

const EditPassword = ({ schema, send }: iEditPasswordProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <StyledEdit>
      <form onSubmit={handleSubmit(send)}>
        <Input
          id="oldPassword"
          name="Senha Atual"
          placeholder="Digite aqui sua senha atual"
          register={register("oldPassword")}
          errors={errors}
          isPassword
        />
        <Input
          id="password"
          name="Nova Senha"
          placeholder="Digite aqui sua nova senha"
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
        <Button name="Salvar" type="submit" caseButton="primary" />
      </form>
    </StyledEdit>
  );
};

export default EditPassword;
