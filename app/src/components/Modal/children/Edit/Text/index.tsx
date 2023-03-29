import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, useForm } from "react-hook-form";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { StyledEdit } from "../styles";
import { useGlobalContext } from "@/contexts/GlobalContext";

interface iEditTextProps {
  idField: string;
  name: string;
  placeholder: string;
  schema: any;
  send: (data: FieldValues, id?: string, idSecond?: string) => Promise<void>;
}

const EditText = ({
  idField,
  name,
  placeholder,
  schema,
  send,
}: iEditTextProps) => {
  const { id, idSecond } = useGlobalContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <StyledEdit>
      <form onSubmit={handleSubmit((data) => send(data, id, idSecond))}>
        <Input
          id={idField}
          name={name}
          placeholder={placeholder}
          register={register(`${idField}`)}
          errors={errors}
        />
        <Button name="Salvar" type="submit" caseButton="primary" />
      </form>
    </StyledEdit>
  );
};

export default EditText;
