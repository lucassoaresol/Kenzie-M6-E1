import Link from "next/link";
import { StyledButton } from "./styles";

interface iButtonProps {
  name: string;
  type?: "button" | "submit" | "reset";
  caseButton?: "primary";
  isLink?: boolean;
  location?: string;
}

const Button = ({ name, type, caseButton, isLink, location }: iButtonProps) => {
  return (
    <StyledButton caseButton={caseButton}>
      {location && isLink ? (
        <Link href={location}>{name}</Link>
      ) : (
        <button type={type}>{name}</button>
      )}
    </StyledButton>
  );
};

export default Button;
