import styled from "styled-components";

const Container = styled.form`
  width: 100%;
  max-width: 700px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 1rem;
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

  .origin-destination-container {
    display: flex;
    flex-wrap: wrap;
    /* justify-content: right; */
    gap: 10px;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    .label-input {
      display: flex;
      gap: 5px;
      align-items: center;
    }
  }
  label {
    margin-bottom: -10px;
    font-weight: 600;
  }

  input,
  select {
    max-width: 190px;
    height: 35px;
    padding: 0.8rem;
    border-radius: 0.5rem;
    border: solid 1px black;
  }

  @media (min-width: 450px) {
    flex-direction: column;
    button {
      width: 50%;
    }
  }
`;

export default Container;
