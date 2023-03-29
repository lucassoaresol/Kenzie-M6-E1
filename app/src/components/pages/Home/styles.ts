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

const StyledContact = styled.div`
  width: 100%;
  background-color: var(--Color-background-secondary);
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
      background-color: var(--Color-background);
      border-radius: 4px;
    }
  }
`;

export { StyledContainer, StyledContact };
