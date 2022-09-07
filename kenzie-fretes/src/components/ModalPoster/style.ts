import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 0.5rem;
  padding: 1rem;
  background-color: var(--grey-2);
  border-radius: 10px;
  box-shadow: 4px 4px 4px var(--grey-1);

  .input {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.5rem;

    label {
      font-weight: 600;
      font-size: 1.2rem;
    }

    textarea {
      padding: 0.5rem;
      border-radius: 0.5rem;
      border: solid 1px black;
      resize: none;
    }
  }

  button {
    width: 120px;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 0.8rem;
    border-radius: 0.5rem;
    background-color: var(--color-secundary);
    border: none;
  }

  @media (max-width: 450px) {
    flex-direction: column;
    button {
      width: 100%;
    }
  }
`

export default Container
