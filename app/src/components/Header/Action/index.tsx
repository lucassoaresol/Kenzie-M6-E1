import { useRouter } from "next/router";
import { destroyCookie } from "nookies";
import { StyledAction } from "./styles";

type iActionProps = {
  isLogout?: boolean;
};

const Action = ({ isLogout }: iActionProps) => {
  const router = useRouter();
  return (
    <>
      {isLogout ? (
        <StyledAction
          type="button"
          onClick={() => {
            destroyCookie(null, "@TokenKenzieM6E1");
            router.replace("/login");
          }}
        >
          Sair
        </StyledAction>
      ) : (
        <StyledAction type="button" onClick={() => router.back()}>
          Voltar
        </StyledAction>
      )}
    </>
  );
};

export default Action;
