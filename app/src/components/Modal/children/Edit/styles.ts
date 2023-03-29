import styled from "styled-components";

const StyledEdit = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  & > form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;

    @media (min-width: 768px) {
      gap: 22px;
    }
  }
`;

export { StyledEdit };
