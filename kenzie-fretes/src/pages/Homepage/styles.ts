import styled from "styled-components";

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 0px 0px 0px;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: var(--grey-2);

  @media (min-width: 768px) {
    gap: 50px;
  }
  .main-image-buttons {
    gap: 50px;
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 250px;
    .logo {
      width: 244px;
      height: 68px;

      animation: fadeInDownBig 1.5s;
    }
    .image-buttons {
      margin: 100px 0px;
    }
    @media (min-width: 768px) {
      .logo {
        width: 551px;
        height: 171px;
      }
    }

    .image-buttons {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      margin: 0;
      .main-first-image {
        display: block;
        max-width: 350px;
        max-height: 450px;
      }

      .buttons {
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 20px;
        height: 400px;
      }
    }

    @media (min-width: 768px) {
      .main-first-image {
        display: block;
        min-width: 450px;
        min-height: 50px;
      }
    }

    @media (min-width: 1059px) {
      .image-buttons {
        flex-direction: row;
        align-items: center;
        justify-content: space-around;

        margin: 0;

        .buttons {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 40px;
          height: 400px;
        }
      }
    }
  }

  .main-text {
    display: flex;
    flex-direction: column;
    gap: 15px;
    background-color: var(--color-primary);
    width: 100%;
    min-height: 100vh;

    align-items: center;
    color: var(--grey-2);
    padding: 20px 15px;

    h2 {
      font-size: 1.5rem;
      font-weight: 800;
      color: white;
    }

    .text-image {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 90%;
      gap: 60px;
      .main-second-image {
        width: 100%;
        max-width: 700px;
      }

      p {
        text-align: justify;
        line-height: 30px;
        font-weight: 500;
        font-size: 1rem;
      }
    }
    @media screen and (min-width: 1059px) {
      .main-text {
        h2 {
          font-size: 1.8rem;
        }
      }
      .text-image {
        flex-direction: column;
        align-items: center;
        justify-content: center;

        gap: 30px;

        .main-second-image {
          max-height: 700px;
          min-width: 900px;
        }
        p {
          line-height: 50px;
          color: white;
          width: 80%;
          font-size: 1.5rem;
          text-align: justify;
        }
      }
    }
  }
`;
export const ContentImage = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
    height: 600px;

    animation: fadeIn 1s;
  }
`;
