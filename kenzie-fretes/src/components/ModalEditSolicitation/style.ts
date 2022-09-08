import styled from "styled-components"

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
        }
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
    }
  }
`

export default Container
