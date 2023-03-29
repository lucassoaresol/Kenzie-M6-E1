import { UseFormRegisterReturn } from "react-hook-form";
import { StyledInput } from "../styles";

interface iPasswordProps {
  id: string;
  placeholder: string;
  register: UseFormRegisterReturn<string>;
}

const Password = ({ id, placeholder, register }: iPasswordProps) => {
  return (
    <StyledInput
      id={id}
      type="password"
      placeholder={placeholder}
      {...register}
    />
  );
};

export default Password;
