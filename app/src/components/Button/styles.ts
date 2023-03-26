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
    border: 1px solid var(--Color-grey-1);
    background-color: var(--Color-grey-1);
  }
  & > button {
    width: 100%;
    height: 38.5px;
    padding: 0 22px;
    font-weight: 500;
    font-size: 12px;
    color: #fff;
    border-radius: 4.06066px;
    border: 1px solid transparent;

    ${({ caseButton }) => {
      switch (caseButton) {
        case "primary":
          return css`
            background-color: var(--Color-primary);
            border-color: var(--Color-primary);
          `;

        default:
          return css``;
      }
    }}
  }
`;

export { StyledButton };
