import styled from "styled-components";

const StyledDarkMode = styled.div`
  width: 40px;
  height: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  font-size: 12px;
  color: var(--Color-text-primary);

  border-radius: 20px;
  background-color: var(--Color-background);
  opacity: 0.5;
  transition: 0.3s;

  & > div {
    width: 10px;
    height: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 10px;
    font-weight: 400;

    opacity: 0.5;
    transition: right 0.17s ease;
  }

  .active {
    width: 16px;
    height: 16px;

    font-size: 12px;
    color: var(--Color-text-primary);

    border-radius: 50%;
    background-color: var(--Color-background);
    box-shadow: 0 0 2px rgb(0 0 0 / 10%);
    opacity: unset;
    transition: left 0.17s ease;
  }
`;

export { StyledDarkMode };
