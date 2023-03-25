import styled from "styled-components";

const StyledLoginPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  max-width: 370px;
`;

const StyledContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 34px 18px;
  gap: 15px;
  & > h2 {
    color: var(--Color-text-primary);
    font-size: 15px;
    font-weight: 700;
  }
  & > form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;

export { StyledLoginPage, StyledContent };
