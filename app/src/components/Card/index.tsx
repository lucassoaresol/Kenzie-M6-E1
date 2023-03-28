import { MdEmail, MdLocalPhone } from "react-icons/md";
import formatPhone from "@/scripts/formatPhone";
import { StyledCard } from "./styles";

interface iCardProps {
  elem: {
    id: string;
    fullName: string;
    listEmail: [{ id: string; email: string }];
    listPhoneNumber: [{ id: string; phoneNumber: string }];
  };
  isContact?: boolean;
}

const Card = ({ elem, isContact }: iCardProps) => {
  return isContact ? (
    <StyledCard>
      <h3>{elem.fullName}</h3>
      <p>Lista de Email</p>
      <div>
        {elem.listEmail.map((el) => (
          <p key={el.id}>
            <span>
              <MdEmail />
            </span>
            {el.email}
          </p>
        ))}
      </div>
      <p>Lista de Contato</p>
      <div>
        {elem.listPhoneNumber.map((el) => (
          <p key={el.id}>
            <span>
              <MdLocalPhone />
            </span>
            {formatPhone(el.phoneNumber)}
          </p>
        ))}
      </div>
    </StyledCard>
  ) : (
    <StyledCard>
      <h3>Olá, {elem.fullName}</h3>
      <p>Lista de Email</p>
      <div>
        {elem.listEmail.map((el) => (
          <p key={el.id}>
            <span>
              <MdEmail />
            </span>
            {el.email}
          </p>
        ))}
      </div>
      <p>Lista de Contato</p>
      <div>
        {elem.listPhoneNumber.map((el) => (
          <p key={el.id}>
            <span>
              <MdLocalPhone />
            </span>
            {formatPhone(el.phoneNumber)}
          </p>
        ))}
      </div>
    </StyledCard>
  );
};

export default Card;
