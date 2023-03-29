import styled from "styled-components";

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  max-width: 370px;
  margin: 60px 0;
`;

const StyledTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  & > h2 {
    display: inline-flex;
    align-items: flex-start;
    font-weight: 600;
    font-size: 16px;
    gap: 10px;
    color: var(--Color-text-primary);
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
    background-color: var(--Color-button-secondary);
    & > svg {
      width: 10px;
      stroke-width: 1;
    }
  }
`;

export { StyledPage, StyledTitle };
