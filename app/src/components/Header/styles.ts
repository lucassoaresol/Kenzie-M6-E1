import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  & > a > h1 {
    color: var(--Color-primary);
  }
`;

export { StyledHeader };
