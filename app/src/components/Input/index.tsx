import {
  FieldErrors,
  FieldValues,
  UseFormRegisterReturn,
} from "react-hook-form";
import ErrorsMessage from "./ErrorsMessage";
import { StyledInput } from "./styles";

type iInputProps = {
  id: string;
  name: string;
  placeholder: string;
  register: UseFormRegisterReturn<string>;
  errors: FieldErrors<FieldValues>;
  isPassword?: boolean;
};

const Input = ({
  id,
  name,
  placeholder,
  register,
  errors,
  isPassword,
}: iInputProps) => {
  return (
    <StyledInput>
      <label htmlFor={id}>{name}</label>
      {isPassword ? (
        <input
          id={id}
          type="password"
          placeholder={placeholder}
          {...register}
        />
      ) : (
        <input id={id} type="text" placeholder={placeholder} {...register} />
      )}
      <ErrorsMessage errors={errors} id={id} />
    </StyledInput>
  );
};

export default Input;
