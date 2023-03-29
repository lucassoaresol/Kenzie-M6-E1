import { StyledCard } from "./styles";
import Content from "./Content";
import { iUser } from "@/services/apiUser";
import { iContact } from "@/services/apiContact";
import { useGlobalContext } from "@/contexts/GlobalContext";

interface iCardProps {
  elem: iUser | iContact;
}

const Card = ({ elem }: iCardProps) => {
  const { setElem, setOption, setSecond, setRoute } = useGlobalContext();
  return (
    <StyledCard>
      {elem.username ? (
        <Content elem={elem} />
      ) : (
        <button
          onClick={() => {
            setElem(elem);
            setOption("update");
            setRoute("contact");
            setSecond(undefined);
          }}
        >
          <Content elem={elem} />
        </button>
      )}
    </StyledCard>
  );
};

export default Card;
