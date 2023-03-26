import styled from "styled-components";

const StyledInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  & > label {
    font-weight: 400;
    font-size: 10px;
    color: var(--Color-grey-0);
    margin-bottom: 10px;
    @media (min-width: 768px) {
      font-size: 13px;
    }
  }
  input {
    width: 100%;
    height: 38.5px;
    padding: 0 13px;
    color: var(--Color-grey-0);
    font-weight: 400;
    font-size: 15px;
    background-color: var(--Color-grey-2);
    border: 1px solid var(--Color-grey-0);
    border-radius: 3px;
  }
`;

const StyledInputPassword = styled.div`
  position: relative;
  width: 100%;

  span {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    color: var(--Color-grey-0);
    cursor: pointer;

    font-size: 9.63px;
  }
  @media (min-width: 768px) {
    span {
      font-size: 12px;
    }
  }
`;

export { StyledInput, StyledInputPassword };
