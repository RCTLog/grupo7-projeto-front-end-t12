import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 1rem 5%;
  border-top: 2px solid #c7c7c7;
  max-height: 80px;

  .flex {
    display: flex;
    gap: 5px;
    align-items: center;
  }

  .contact {
    .contact-pages {
      display: flex;
      align-items: center;

      gap: 20px;

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        color: inherit;
      }
    }

    .contact-info {
      display: flex;
      gap: 5px;
      align-items: center;

      a {
        color: inherit;
      }
    }
  }

  @media screen and (min-width: 375px) {
    .contact {
      display: flex;
      justify-content: space-between;
    }
  }

  @media screen and (min-width: 455px) {
    .email {
      display: flex;
      align-items: center;
      gap: 15px;
    }

    .contact {
      justify-content: start;
      gap: 85px;
    }
  }

  @media screen and (min-width: 850px) {
    display: flex;
    justify-content: space-between;

    .contact {
      justify-content: start;
      gap: 25px;
    }
  }

  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;

    gap: 20px;

    .email {
      display: flex;
      flex-direction: column;
    }
    .contact {
      display: flex;
      flex-direction: column;
    }
  }
`;
