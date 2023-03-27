import { FieldError, Merge, FieldErrorsImpl } from "react-hook-form";
import { StyledErrorsMessage } from "./styles";
import { IoMdInformationCircle } from "react-icons/io";

interface iErrorsMessageProps {
  message:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
}

const ErrorsMessage = ({ message }: iErrorsMessageProps) => {
  return (
    <>
      {typeof message == "string" && (
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
