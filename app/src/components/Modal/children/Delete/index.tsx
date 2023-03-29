import { StyledDeleteCard } from "./styles";
import Options from "./Options";

const DeleteCard = () => {
  return (
    <StyledDeleteCard>
      <div>
        <h3>Essa ação é Irreversível!</h3>
        <Options />
      </div>
    </StyledDeleteCard>
  );
};

export default DeleteCard;
