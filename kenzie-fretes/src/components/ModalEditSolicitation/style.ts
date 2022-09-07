import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 90%;
  overflow-y: hidden;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(18, 18, 20, 0.5);
  color: var(--color-gray-0);
  z-index: 100;
  backdrop-filter: blur(5px);

  .edit {
    width: 90vw;
    max-width: 700px;
    padding: 10px;
    background-color: white;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 2px 4px 4px var(--grey-0);

    .title {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      svg {
        cursor: pointer;
      }
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      width: 90%;
      align-items: center;
      .container-textarea {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        gap: 19px;

        textarea {
          resize: none;
          border-radius: 0.5rem;
          width: 100%;
          padding: 0.8rem;
        }
      }
      .origin-destination-container {
        display: flex;
        flex-wrap: wrap;
        /* justify-content: right; */
        gap: 10px;
        align-items: space-around;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        gap: 10px;
      }
      label {
        margin-bottom: -10px;
        font-weight: 600;
      }

      .input-origin,
      .input-destination,
      select {
        width: 100%;
        height: 55px;
        /* padding: 0.8rem; */
        border-radius: 0.5rem;

        input::placeholder {
          font-size: 14px;
        }

        @media (min-width: 650px) {
          width: 250px;
        }
      }

      button {
        cursor: pointer;
        min-width: 250px;
        padding: 0.8rem;
        border-radius: 0.5rem;
        background-color: var(--color-secundary);
        border: none;
        box-shadow: 2px 4px 4px var(--grey-0);
      }
    }
  }
`;

export default Container;
