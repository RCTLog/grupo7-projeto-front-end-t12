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
  z-index: 5;
  backdrop-filter: blur(3px);

  .edit {
    width: 90%;
    max-width: 40rem;
    height: 17.625rem;
    background-color: var(--grey-2);
    border-radius: .3125rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0.125rem 0.25rem 0.25rem var(--grey-0);

    .title {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.5rem 2.5rem;

      svg {
        cursor: pointer;
      }
    }

    form {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 1.5rem;
      width: 90%;

      textarea {
        resize: none;
        width: 100%;
        height: 9.4375rem;
        border: .0625rem solid #c7c7c7;
        border-radius: .625rem;
        padding: .625rem;
      }

      button {
        width: 90%;
        max-width: 324px;
        height: 40px;
        padding: 0.8rem;
        border-radius: 0.5rem;
        background-color: var(--color-secundary);
        border: none;
        box-shadow: 0.125rem 0.25rem 0.25rem var(--grey-0);
        cursor: pointer;
      }
    }
  }
`;

export default Container;
