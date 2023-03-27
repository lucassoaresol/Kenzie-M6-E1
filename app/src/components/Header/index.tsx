import Link from "next/link";
import Action from "./Action";
import DarkMode from "./DarkMode";
import { StyledHeader } from "./styles";

type iHeaderProps = {
  isRegister?: boolean;
};

const Header = ({ isRegister }: iHeaderProps) => {
  return (
    <StyledHeader>
      <Link href="/">
        <h1>Kenzie-M6-E1</h1>
      </Link>
      <>{isRegister && <Action />}</>
      <DarkMode />
    </StyledHeader>
  );
};

export default Header;
