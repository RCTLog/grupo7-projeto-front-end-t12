import styled from "styled-components";

export const Container = styled.section`
  align-items: center;
  display: flex;
  width: 90%;
  height: 60px;
  gap: 1rem;

  border-top: 1px solid #c7c7c7;
  border-bottom: 1px solid #c7c7c7;
  margin: 0 182px;

  p {
    font-weight: 600;
    cursor: pointer;
    :hover{
      color: var(--color-primary);
    }
  }

  @media screen and (min-width: 450px) {
    padding-left: 40px;
  }

  @media (max-width: 450px) {
    width: 100%;
    justify-content: center;
  }
`;
