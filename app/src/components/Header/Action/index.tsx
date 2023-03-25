import { useRouter } from "next/router";
import { StyledAction } from "./styles";

const Action = () => {
  const router = useRouter();
  const isTrue = router.route != "/";
  return (
    <>
      {isTrue && (
        <StyledAction type="button" onClick={() => router.back()}>
          Voltar
        </StyledAction>
      )}
    </>
  );
};

export default Action;
