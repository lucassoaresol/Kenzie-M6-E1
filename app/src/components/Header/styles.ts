import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  & > a > h1 {
    font-size: 20px;
    color: var(--Color-primary);
    @media (min-width: 768px) {
      font-size: 22px;
    }
  }
  & > div {
    display: flex;
    align-items: center;
    gap: 15px;
  }
`;

export { StyledHeader };
