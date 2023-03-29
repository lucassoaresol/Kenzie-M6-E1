import styled from "styled-components";

const StyledRegisterPage = styled.div`
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
    color: var(--Color-text-primary);
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
    flex-direction: column;
    justify-content: flex-end;
    gap: 5px;

    &:last-child {
      justify-content: flex-end;
    }

    &:nth-child(2) > div > button {
      display: none;
    }

    & > div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 5px;
    }

    & > div > h3 {
      font-weight: 400;
      font-size: 10px;
      color: var(--Color-text-primary);
      @media (min-width: 768px) {
        font-size: 12px;
      }
    }

    & > div > button {
      display: inline-flex;
      align-items: center;
      padding: 0 10px;
      height: 20px;
      color: var(--Color-grey-0);
      border-radius: 4px;
      background-color: var(--Color-button-secondary);
      & > svg {
        width: 10px;
        stroke-width: 1;
      }
    }
  }
`;

export { StyledRegisterPage, StyledList };
