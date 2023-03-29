import formatPhone from "@/scripts/formatPhone";
import { iContact } from "@/services/apiContact";
import { iUser } from "@/services/apiUser";
import { MdEmail, MdLocalPhone } from "react-icons/md";

interface iContentProps {
  elem: iUser | iContact | undefined;
}

const Content = ({ elem }: iContentProps) => {
  return (
    <>
      {elem && (
        <>
          {elem.username ? (
            <h3>Olá, {elem.fullName}</h3>
          ) : (
            <h3>{elem.fullName}</h3>
          )}
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
        </>
      )}
    </>
  );
};

export default Content;
