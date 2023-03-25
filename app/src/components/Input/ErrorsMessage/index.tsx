import { FieldErrors, FieldValues } from "react-hook-form";
import { IoMdInformationCircle } from "react-icons/io";
import { StyledErrorsMessage } from "./styles";

interface iErrorsMessageProps {
  errors: FieldErrors<FieldValues>;
  id: string;
}

const ErrorsMessage = ({ errors, id }: iErrorsMessageProps) => {
  const message = errors[id]?.message;
  return (
    <>
      {errors[id] && typeof message == "string" && (
        <StyledErrorsMessage>
          {message}
          <span style={{ paddingTop: 2.2 }}>
            <IoMdInformationCircle />
          </span>
        </StyledErrorsMessage>
      )}
    </>
  );
};

export default ErrorsMessage;
