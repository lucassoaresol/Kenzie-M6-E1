import Header from "@/components/Header";
import { iHomeProps } from "@/pages";
import { CgProfile } from "react-icons/cg";
import { FaUserEdit } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { VscAdd } from "react-icons/vsc";
import { StyledContainer, StyledContact } from "./styles";
import Card from "@/components/Card";
import { StyledTitle } from "@/styles/pages";
import { useGlobalContext } from "@/contexts/GlobalContext";

const HomePage = ({ user }: iHomeProps) => {
  const { setRoute, setOption, setSecond, setElem } = useGlobalContext();

  return (
    <>
      <StyledContainer>
        <div>
          <Header isRegister isLogout />
        </div>
      </StyledContainer>
      <StyledContainer>
        <div>
          <StyledTitle style={{ marginBottom: "20px" }}>
            <h2>
              <span>
                <CgProfile />
              </span>
              Perfil
            </h2>
            <button
              onClick={() => {
                setElem(user);
                setOption("update");
                setRoute("user");
                setSecond(undefined);
              }}
            >
              <FaUserEdit />
            </button>
          </StyledTitle>
          <Card elem={user} />
        </div>
      </StyledContainer>
      <StyledContainer>
        <div>
          <StyledTitle>
            <h2>
              <span>
                <RiContactsFill />
              </span>
              Contatos
            </h2>
            <button
              onClick={() => {
                setRoute("contact");
                setOption("create");
              }}
            >
              <VscAdd />
            </button>
          </StyledTitle>
          <>
            {user.contacts.length > 0 && (
              <StyledContact>
                <ul>
                  {user.contacts.map((el) => (
                    <li key={el.id}>
                      <Card elem={el} />
                    </li>
                  ))}
                </ul>
              </StyledContact>
            )}
          </>
        </div>
      </StyledContainer>
    </>
  );
};

export default HomePage;
