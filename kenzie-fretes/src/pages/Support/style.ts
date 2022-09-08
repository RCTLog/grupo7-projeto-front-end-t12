import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: var(--chinese-black);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: white;

  .logo_top {
    width: 60%;
    max-width: 500px;
    min-height: 8vh;
    margin-bottom: 1rem;
  }

  .main {
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    min-height: 50vh;

    button {
      border: none;
      background-color: transparent;
      width: 100px;
      font-size: 1.2rem;
    }
    a {
      color: inherit;
      display: flex;
      align-items: center;
      font-size: 1.2rem;
    }

    .dev-list {
      display: flex;
      flex-direction: column;
      gap: 20px;

      h2 {
        display: flex;
        align-items: center;
        gap: 18px;
        font-size: 1.2rem;
      }

      .devs {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-left: 5px;
      }
    }
  }
`;

export default Container;
