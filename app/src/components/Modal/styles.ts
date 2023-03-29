import styled, { css } from "styled-components";

interface iStyledModalProps {
  isDelete?: boolean;
}

const StyledModal = styled.div<iStyledModalProps>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);

  & > div {
    display: flex;
    height: fit-content;
    flex-direction: column;
    width: 80%;
    max-width: 780px;
    background-color: var(--Color-background-secondary);
    padding: 20px;
    ${({ isDelete }) => {
      if (isDelete) {
        return css`
          max-width: 400px;
        `;
      }
    }}
    & > h3 {
      text-align: center;
      color: var(--Color-text-secondary);
      font-size: 12px;
      margin-bottom: 10px;
    }
  }
`;

export { StyledModal };
