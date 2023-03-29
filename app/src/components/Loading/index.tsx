import { useGlobalContext } from "@/contexts/GlobalContext";
import { StyledLoading } from "./style";

const Loading = () => {
  const { loading } = useGlobalContext();
  return <>{loading && <StyledLoading>Loading...</StyledLoading>}</>;
};

export default Loading;
