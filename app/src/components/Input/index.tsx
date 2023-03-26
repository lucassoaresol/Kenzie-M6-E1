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

type iInputProps = {
  id: string;
  name: string;
  placeholder: string;
  register: UseFormRegisterReturn<string>;
  errors: FieldErrors<FieldValues>;
  isPassword?: boolean;
  isConfirm?: boolean;
};

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
        <StyledInputPassword>
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
      <ErrorsMessage errors={errors} id={id} />
    </StyledDiv>
  );
};

export default Input;
