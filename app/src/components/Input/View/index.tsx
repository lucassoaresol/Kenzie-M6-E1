import { useGlobalContext } from "@/contexts/GlobalContext";
import { FaEyeSlash, FaEye } from "react-icons/fa";

interface iViewProps {
  inpText: JSX.Element;
  inpPassword: JSX.Element;
  isPassword?: boolean;
}

const View = ({ inpText, inpPassword, isPassword }: iViewProps) => {
  const { isView, setIsView } = useGlobalContext();
  return isView ? (
    <>
      {inpText}
      {isPassword && (
        <span onClick={() => setIsView(false)}>
          <FaEyeSlash />
        </span>
      )}
    </>
  ) : (
    <>
      {inpPassword}
      {isPassword && (
        <span onClick={() => setIsView(true)}>
          <FaEye />
        </span>
      )}
    </>
  );
};

export default View;
