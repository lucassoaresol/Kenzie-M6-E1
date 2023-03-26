import styled from "styled-components";

const StyledLoginPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  max-width: 370px;
`;

const StyledContent = styled.div`
  margin-top: 35px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 34px 18px;
  gap: 15px;
  background-color: var(--Color-background-secondary);
  box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
  border-radius: 3.20867px;
  & > h2 {
    color: var(--Color-grey-0);
    font-size: 15px;
    font-weight: 700;
  }
  & > form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  & > div {
    margin-top: 5px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 15px;
  }
`;

export { StyledLoginPage, StyledContent };
