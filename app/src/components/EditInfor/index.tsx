import { MdEmail, MdLocalPhone } from "react-icons/md";
import { VscAdd, VscRemove } from "react-icons/vsc";
import formatPhone from "@/scripts/formatPhone";
import { StyledEditInfor } from "./styles";
import { FiEdit } from "react-icons/fi";
import { iUser } from "@/services/apiUser";
import { iContact } from "@/services/apiContact";
import { useGlobalContext } from "@/contexts/GlobalContext";

interface iCardProps {
  elem: iUser | iContact | undefined;
}

const InfoEdit = ({ elem }: iCardProps) => {
  const { setId, setElemSecond, setOption, setSecond, setRoute, setIdSecond } =
    useGlobalContext();

  return (
    <StyledEditInfor>
      {elem && (
        <>
          <div>
            <h3>{elem.fullName}</h3>
            <button
              onClick={() => {
                setOption("update");
                setSecond("fullName");
                setId(elem.id);
                elem.username ? setRoute("user") : setRoute("contact");
              }}
            >
              <FiEdit />
            </button>
          </div>
          {elem.username && (
            <div>
              <h3>{elem.username}</h3>
              <button
                onClick={() => {
                  setOption("update");
                  setRoute("user");
                  setSecond("username");
                }}
              >
                <FiEdit />
              </button>
            </div>
          )}
          <div>
            <p>Lista de Email</p>
            <button
              onClick={() => {
                setOption("create");
                setSecond("email");
                setId(elem.id);
                elem.username ? setRoute("user") : setRoute("contact");
              }}
            >
              <VscAdd />
            </button>
          </div>
          {elem.listEmail.map((el) => (
            <div key={el.id}>
              <p>
                <span>
                  <MdEmail />
                </span>
                {el.email}
              </p>
              <button
                onClick={() => {
                  setOption("update");
                  setSecond("email");
                  setId(elem.id);
                  setIdSecond(el.id);
                  setElemSecond(el);
                  elem.username ? setRoute("user") : setRoute("contact");
                }}
              >
                <FiEdit />
              </button>
              <button
                onClick={() => {
                  setOption("delete");
                  setSecond("email");
                  setId(elem.id);
                  setIdSecond(el.id);
                  setElemSecond(el);
                  elem.username ? setRoute("user") : setRoute("contact");
                }}
              >
                <VscRemove />
              </button>
            </div>
          ))}
          <div>
            <p>Lista de Contato</p>
            <button
              onClick={() => {
                setOption("create");
                setSecond("phone");
                setId(elem.id);
                elem.username ? setRoute("user") : setRoute("contact");
              }}
            >
              <VscAdd />
            </button>
          </div>
          {elem.listPhoneNumber.map((el) => (
            <div key={el.id}>
              <p>
                <span>
                  <MdLocalPhone />
                </span>
                {formatPhone(el.phoneNumber)}
              </p>
              <button
                onClick={() => {
                  setOption("update");
                  setSecond("phone");
                  setId(elem.id);
                  setIdSecond(el.id);
                  setElemSecond(el);
                  elem.username ? setRoute("user") : setRoute("contact");
                }}
              >
                <FiEdit />
              </button>
              <button
                onClick={() => {
                  setOption("delete");
                  setSecond("phone");
                  setId(elem.id);
                  setIdSecond(el.id);
                  setElemSecond(el);
                  elem.username ? setRoute("user") : setRoute("contact");
                }}
              >
                <VscRemove />
              </button>
            </div>
          ))}
          {elem.username ? (
            <div style={{ marginTop: 10 }}>
              <button
                onClick={() => {
                  setOption("update");
                  setSecond("password");
                  setRoute("user");
                }}
              >
                Alterar Senha
              </button>
              <button
                onClick={() => {
                  setOption("delete");
                  setRoute("user");
                }}
              >
                Deletar Conta
              </button>
            </div>
          ) : (
            <div>
              <button
                onClick={() => {
                  setOption("delete");
                  setRoute("contact");
                  setId(elem.id);
                }}
              >
                Deletar Contato
              </button>
            </div>
          )}
        </>
      )}
    </StyledEditInfor>
  );
};

export default InfoEdit;
