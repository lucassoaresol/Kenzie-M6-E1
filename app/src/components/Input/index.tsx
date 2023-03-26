import { useGlobalContext } from "@/contexts/GlobalContext";
import {
  FieldErrors,
  FieldValues,
  UseFormRegisterReturn,
} from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import ErrorsMessage from "./ErrorsMessage";
import { StyledInput, StyledInputPassword } from "./styles";

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
  const { isView, setIsView } = useGlobalContext();
  return (
    <StyledInput>
      <label htmlFor={id}>{name}</label>
      {isConfirm ? (
        <>
          {isView ? (
            <input
              id={id}
              type="text"
              placeholder={placeholder}
              {...register}
            />
          ) : (
            <input
              id={id}
              type="password"
              placeholder={placeholder}
              {...register}
            />
          )}
        </>
      ) : (
        <>
          {isPassword ? (
            <StyledInputPassword>
              {isView ? (
                <>
                  <input
                    id={id}
                    type="text"
                    placeholder={placeholder}
                    {...register}
                  />
                  <span onClick={() => setIsView(false)}>
                    <FaEyeSlash />
                  </span>
                </>
              ) : (
                <>
                  <input
                    id={id}
                    type="password"
                    placeholder={placeholder}
                    {...register}
                  />
                  <span onClick={() => setIsView(true)}>
                    <FaEye />
                  </span>
                </>
              )}
            </StyledInputPassword>
          ) : (
            <input
              id={id}
              type="text"
              placeholder={placeholder}
              {...register}
            />
          )}
        </>
      )}
      <ErrorsMessage errors={errors} id={id} />
    </StyledInput>
  );
};

export default Input;
