import styled, { css } from "styled-components";

interface iButtonProps {
  caseButton?: "primary";
}

const StyledButton = styled.div<iButtonProps>`
  width: 100%;
  & > a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 38.5px;
    padding: 0 22px;
    font-weight: 500;
    font-size: 12px;
    color: #fff;
    border-radius: 4.06066px;
    border: 1px solid var(--Color-button-secondary);
    background-color: var(--Color-button-secondary);

    @media (min-width: 768px) {
      height: 48px;
      font-size: 16px;
    }
  }
  & > button {
    width: 100%;
    height: 38.5px;
    padding: 0 22px;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 12px;
    color: #fff;
    border-radius: 4px;
    border: 1px solid transparent;

    @media (min-width: 768px) {
      height: 48px;
      font-size: 16px;
    }

    ${({ caseButton }) => {
      switch (caseButton) {
        case "primary":
          return css`
            background-color: var(--Color-button-primary);
            border-color: var(--Color-button-primary);
          `;

        default:
          return css``;
      }
    }}
  }
`;

export { StyledButton };
