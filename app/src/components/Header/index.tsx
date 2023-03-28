import Link from "next/link";
import Action from "./Action";
import DarkMode from "./DarkMode";
import { StyledHeader } from "./styles";

type iHeaderProps = {
  isRegister?: boolean;
  isLogout?: boolean;
};

const Header = ({ isRegister, isLogout }: iHeaderProps) => {
  return (
    <StyledHeader>
      <Link href="/">
        <h1>Kenzie-M6-E1</h1>
      </Link>
      <div>
        {isRegister ? (
          <>{isLogout ? <Action isLogout /> : <Action />}</>
        ) : (
          <></>
        )}
        <DarkMode />
      </div>
    </StyledHeader>
  );
};

export default Header;
