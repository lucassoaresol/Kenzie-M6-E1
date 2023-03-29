import styled from "styled-components";

const StyledAddContato = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  & > form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;

    @media (min-width: 768px) {
      gap: 22px;
    }
  }
`;

const StyledModal = styled.div`
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
  }
`;

export { StyledAddContato, StyledModal };
