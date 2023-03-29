import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  & > label {
    font-weight: 400;
    font-size: 10px;
    color: var(--Color-text-primary);
    @media (min-width: 768px) {
      font-size: 12px;
    }
  }
  #username {
    text-transform: lowercase;
  }
  #username::placeholder {
    text-transform: initial;
  }

  #oldPassword > span {
    display: none;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  height: 38.5px;
  padding: 0 13px;
  color: var(--Color-grey-0);
  font-weight: 400;
  font-size: 13px;
  background-color: var(--Color-grey-2);
  border: 1px solid var(--Color-grey-0);
  border-radius: 3px;
  @media (min-width: 768px) {
    height: 48px;
    padding: 0 16px;
    font-size: 16px;
  }
`;

const StyledInputPassword = styled.div`
  position: relative;
  width: 100%;

  span {
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
    color: var(--Color-grey-1);
    cursor: pointer;

    font-size: 9.63px;
    @media (min-width: 768px) {
      font-size: 12px;
      right: 20px;
    }
  }
`;

export { StyledDiv, StyledInput, StyledInputPassword };
