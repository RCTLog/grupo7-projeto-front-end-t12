import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(18, 18, 20, 0.5);
  color: var(--color-gray-0);
  z-index: 100;
  backdrop-filter: blur(20px);

  .edit {
    width: 90vw;
    max-width: 350px;
    height: 400px;
    background-color: white;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 2px 4px 4px  var(--grey-0);

    .title {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.5rem 1rem;

      svg {
        cursor: pointer;
      }
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      width: 90%;

      label {
        margin-bottom: -10px;
        font-weight: 600;
      }

      input, select {
        padding: 0.8rem;
        border-radius: 0.5rem;
        border: solid 1px black;
      }

      button {
        cursor: pointer;
        padding: 0.8rem;
        border-radius: 0.5rem;
        background-color: var(--color-secundary);
        border: none;
        box-shadow: 2px 4px 4px  var(--grey-0);
      }
    }
  }
`;

export default Container;