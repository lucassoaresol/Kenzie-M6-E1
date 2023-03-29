import {
  UseFormRegisterReturn,
  FieldErrors,
  FieldValues,
} from "react-hook-form";
import ErrorsMessage from "./ErrorsMessage";
import Text from "./Text";
import Password from "./Password";
import View from "./View";
import { StyledDiv, StyledInputPassword } from "./styles";

interface iInputProps {
  id: string;
  name: string;
  placeholder: string;
  register: UseFormRegisterReturn<string>;
  errors: FieldErrors<FieldValues>;
  isPassword?: boolean;
  isConfirm?: boolean;
}

const Input = ({
  id,
  name,
  placeholder,
  register,
  errors,
  isPassword,
  isConfirm,
}: iInputProps) => {
  return (
    <StyledDiv>
      <label htmlFor={id}>{name}</label>
      {isConfirm ? (
        <View
          inpText={
            <Text id={id} placeholder={placeholder} register={register} />
          }
          inpPassword={
            <Password id={id} placeholder={placeholder} register={register} />
          }
        />
      ) : isPassword ? (
        <StyledInputPassword id={id}>
          <View
            inpText={
              <Text id={id} placeholder={placeholder} register={register} />
            }
            inpPassword={
              <Password id={id} placeholder={placeholder} register={register} />
            }
            isPassword
          />
        </StyledInputPassword>
      ) : (
        <Text id={id} placeholder={placeholder} register={register} />
      )}
      <ErrorsMessage message={errors[id]?.message} />
    </StyledDiv>
  );
};

export default Input;
