import styled from "styled-components";

const StyledCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  & > h3 {
    font-weight: 700;
    font-size: 18px;
    color: var(--Color-grey-0);
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
  & > div {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
`;

export { StyledCard };
