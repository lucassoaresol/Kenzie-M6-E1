import { useRouter } from "next/router";
import { StyledAction } from "./styles";

const Action = () => {
  const router = useRouter();
  return (
    <StyledAction type="button" onClick={() => router.back()}>
      Voltar
    </StyledAction>
  );
};

export default Action;
