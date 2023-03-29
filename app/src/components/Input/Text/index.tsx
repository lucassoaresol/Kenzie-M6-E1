import { UseFormRegisterReturn } from "react-hook-form";
import { StyledInput } from "../styles";

interface iTextProps {
  id?: string;
  placeholder: string;
  register: UseFormRegisterReturn<string>;
}

const Text = ({ id, placeholder, register }: iTextProps) => {
  return (
    <StyledInput id={id} type="text" placeholder={placeholder} {...register} />
  );
};

export default Text;
