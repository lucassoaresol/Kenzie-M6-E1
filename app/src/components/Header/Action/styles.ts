import styled from "styled-components";

const StyledAction = styled.button`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 10px;
  padding: 0 16px;
  height: 30px;
  color: var(--Color-grey-0);
  border-radius: 4px;
  background-color: var(--Color-background-secondary);

  @media (min-width: 768px) {
    height: 40px;
    font-size: 12px;
  }
`;

export { StyledAction };
