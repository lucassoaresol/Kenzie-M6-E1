import styled from "styled-components";

const StyledLoginPage = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 34px 18px;
  gap: 15px;
  background-color: var(--Color-background-secondary);
  box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
  border-radius: 3.20867px;

  @media (min-width: 768px) {
    margin-top: 35px;
    padding: 42px 22px;
  }

  & > h2 {
    color: var(--Color-grey-0);
    font-size: 15px;
    font-weight: 700;

    @media (min-width: 768px) {
      font-size: 18px;
    }
  }

  & > form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;

    @media (min-width: 768px) {
      gap: 22px;
    }
  }

  & > div {
    margin-top: 5px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 15px;

    @media (min-width: 768px) {
      margin-top: 15px;
      gap: 22px;
    }

    & > a {
      font-weight: 600;
      font-size: 10px;
      color: var(--Color-grey-1);
      @media (min-width: 768px) {
        font-size: 12px;
      }
    }
  }
`;

export { StyledLoginPage };
