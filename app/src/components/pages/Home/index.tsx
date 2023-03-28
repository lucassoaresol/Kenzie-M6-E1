import Header from "@/components/Header";
import { iHomeProps } from "@/pages";
import { CgProfile } from "react-icons/cg";
import { FaUserEdit } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { VscAdd } from "react-icons/vsc";
import { StyledContainer, StyledInfor, StyledContact } from "./styles";
import Card from "@/components/Card";

const HomePage = ({ user }: iHomeProps) => {
  return (
    <>
      <StyledContainer>
        <div>
          <Header isRegister isLogout />
        </div>
      </StyledContainer>
      <StyledContainer>
        <div>
          <StyledInfor style={{ marginBottom: "20px" }}>
            <h2>
              <span>
                <CgProfile />
              </span>
              Perfil
            </h2>
            <button>
              <FaUserEdit />
            </button>
          </StyledInfor>
          <Card elem={user} />
        </div>
      </StyledContainer>
      <StyledContainer>
        <div>
          <StyledInfor>
            <h2>
              <span>
                <RiContactsFill />
              </span>
              Contatos
            </h2>
            <button>
              <VscAdd />
            </button>
          </StyledInfor>
          <StyledContact>
            <ul>
              {user.contacts.map((el) => (
                <li key={el.id}>
                  <Card elem={el} isContact />
                </li>
              ))}
            </ul>
          </StyledContact>
        </div>
      </StyledContainer>
    </>
  );
};

export default HomePage;
