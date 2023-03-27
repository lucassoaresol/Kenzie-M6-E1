import Link from "next/link";
import Action from "./Action";
import DarkMode from "./DarkMode";
import { StyledHeader } from "./styles";

const Header = () => {
  return (
    <StyledHeader>
      <Link href="/">
        <h1>Kenzie-M6-E1</h1>
      </Link>
      <Action />
      <DarkMode />
    </StyledHeader>
  );
};

export default Header;
