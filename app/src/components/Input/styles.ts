import styled from "styled-components";

const StyledInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  & > label {
    font-weight: 400;
    font-size: 10px;
    color: var(--Color-text-primary);
    @media (min-width: 768px) {
      font-size: 13px;
    }
  }
`;

export { StyledInput };
