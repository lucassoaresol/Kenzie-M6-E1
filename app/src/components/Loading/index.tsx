import { useGlobalContext } from "@/contexts/GlobalContext";
import { StyledLoading } from "./style";

const Loading = () => {
  const { globalLoading } = useGlobalContext();
  return <>{globalLoading && <StyledLoading>Loading...</StyledLoading>}</>;
};

export default Loading;
