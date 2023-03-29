import { StyledTitle } from "@/styles/pages";
import { ReactNode } from "react";
import { StyledModal } from "./styles";
import { AiOutlineClose } from "react-icons/ai";
import { useGlobalContext } from "@/contexts/GlobalContext";

type iModalProps = {
  name: string;
  elemInfo?: string;
  children?: ReactNode;
  isDelete?: boolean;
};

const Modal = ({ name, elemInfo, children, isDelete }: iModalProps) => {
  const { setOption, setRoute, setId, setIdSecond } = useGlobalContext();
  return (
    <StyledModal isDelete={isDelete}>
      <div>
        <StyledTitle style={{ marginBottom: "20px" }}>
          <h2>{name}</h2>
          <button
            onClick={() => {
              setOption(undefined);
              setRoute(undefined);
              setId(undefined);
              setIdSecond(undefined);
            }}
          >
            <AiOutlineClose />
          </button>
        </StyledTitle>
        <h3>{elemInfo}</h3>
        {children}
      </div>
    </StyledModal>
  );
};

export default Modal;
