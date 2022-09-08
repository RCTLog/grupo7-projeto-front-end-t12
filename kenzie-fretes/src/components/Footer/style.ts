import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  margin-top: 3rem;
  min-height: 10vh;

  .logo {
    img {
      display: none;
      width: 200px;
    }
  }

  .info {
    .contact {
      display: flex;
      flex-direction: column;
      gap: 5px;
      margin-bottom: 10px;
      p {
        display: flex;
        align-items: center;
        gap: 10px;
      }
    }

    .links {
      width: 100%;
      display: flex;
      justify-content: space-between;

      .pages {
        display: flex;
        flex-direction: column;
        color: inherit;
        gap: 5px;
        margin-bottom: 10px;

        a {
          color: inherit;
          display: flex;
          align-items: center;
          gap: 10px;
        }
      }

      .networks {
        display: flex;
        align-items: center;
        gap: 1rem;

        a {
          color: inherit;
        }
      }
    }

    .mobile {
      width: 100%;
      margin-bottom: 15px;
      p {
        font-size: 0.95rem;
        margin-bottom: 5px;
      }

      .apps {
        display: flex;
        gap: 1rem;
        
        img {
          width: 45%;
          max-width: 200px;
        }
      }
    }
  }

  .rtclog {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
  }

  @media screen and (min-width: 725px) {
    .info {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: flex-start;
    }
  }
  @media screen and (min-width: 1200px) {
    .logo {
    img {
      display: block;
    }
  }
    .info {
      grid-template-columns: 1fr 1fr 1fr;
      gap: 2rem;
    }
  }
`;

export default Container;
