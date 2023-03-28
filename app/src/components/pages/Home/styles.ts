import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px 10px;
  border-bottom: 1px solid var(--Color-grey-3);
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    max-width: 780px;
  }
`;

const StyledInfor = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  & > h2 {
    display: inline-flex;
    align-items: flex-start;
    font-weight: 600;
    font-size: 16px;
    gap: 10px;
    color: var(--Color-grey-0);
    & > span > svg {
      font-size: 18px;
    }
    @media (min-width: 768px) {
      /* font-size: 16px; */
    }
  }
  & > button {
    display: inline-flex;
    align-items: center;
    padding: 0 10px;
    height: 20px;
    color: var(--Color-grey-0);
    border-radius: 4px;
    background-color: var(--Color-grey-1);
    & > svg {
      width: 10px;
      stroke-width: 1;
    }
  }
`;

const StyledContact = styled.div`
  width: 100%;
  background-color: var(--Color-grey-3);
  border-radius: 4px;
  padding: 20px 10px;
  margin-top: 20px;
  & > ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    & > li {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 15px 10px;
      background-color: var(--Color-grey-4);
      border-radius: 4px;
    }
  }
`;

export { StyledInfor, StyledContainer, StyledContact };
