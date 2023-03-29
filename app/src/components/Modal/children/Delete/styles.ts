import styled from "styled-components";

const StyledDeleteCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    & > h3 {
      font-weight: 700;
      font-size: 18px;
      color: var(--Color-text-primary);
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
  }

  p {
    display: inline-flex;
    align-items: flex-start;
    font-weight: 400;
    font-size: 12px;
    gap: 5px;
    color: var(--Color-grey-1);
    & > span > svg {
      font-size: 16px;
    }
  }
`;

export { StyledDeleteCard };
