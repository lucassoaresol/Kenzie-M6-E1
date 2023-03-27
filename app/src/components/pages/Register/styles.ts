import styled from "styled-components";

const StyledRegisterPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  max-width: 500px;
  margin: 60px 0;
`;

const StyledContent = styled.div`
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

  & > p {
    font-weight: 400;
    font-size: 10px;
    color: var(--Color-grey-1);
    @media (min-width: 768px) {
      font-size: 12px;
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
`;

const StyledList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  & > li {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;

    &:last-child {
      justify-content: flex-end;
    }

    &:nth-child(2) > button {
      display: none;
    }

    & > h3 {
      font-weight: 400;
      font-size: 10px;
      color: var(--Color-grey-0);
      @media (min-width: 768px) {
        font-size: 12px;
      }
    }
    & > button {
      font-family: "Inter", sans-serif;
      font-weight: 600;
      font-size: 10px;
      padding: 0 16px;
      height: 30px;
      color: var(--Color-grey-0);
      border-radius: 4px;
      background-color: var(--Color-grey-1);

      @media (min-width: 768px) {
        height: 40px;
        font-size: 12px;
      }
    }
    & > div {
      width: 100%;

      & > input {
        width: 100%;
        height: 38.5px;
        padding: 0 13px;
        color: var(--Color-grey-0);
        font-weight: 400;
        font-size: 13px;
        background-color: var(--Color-grey-2);
        border: 1px solid var(--Color-grey-0);
        border-radius: 3px;
        @media (min-width: 768px) {
          height: 48px;
          padding: 0 16px;
          font-size: 16px;
        }
      }
    }
  }
`;

export { StyledRegisterPage, StyledContent, StyledList };
