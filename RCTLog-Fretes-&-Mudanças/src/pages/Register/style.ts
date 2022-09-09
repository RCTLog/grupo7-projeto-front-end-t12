import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#eb8c5b",endColorstr="#5a8bb7",GradientType=1);
  background-color: #eb8c5b;
  background-image: linear-gradient(90deg, #eb8c5b 20%, #5a8bb7 80%);

  .register-container {
    width: 100%;
    max-width: 485px;
    height: 100vh;
    max-height: 772px;

    display: flex;

    justify-content: center;
    align-items: center;
    gap: 100px;

    background-color: #ffffff;

    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);

    animation: jackInTheBox 1.5s;

    .register-image {
      display: none;
      width: 50%;

      img {
        width: 100%;
      }
    }
    @media (min-width: 485px) {
      height: 90vh;
      border-radius: 15px;
    }
    @media (min-width: 1285px) {
      width: 70%;
      max-width: 1176px;
      height: 650px;
      border-radius: 15px;
      .register-image {
        display: block;
      }
    }
  }
`;

export const RegisterWrap = styled.div`
  width: 100%;
  max-width: 300px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  .arrowBack {
    width: 20px;
    height: 20px;
    cursor: pointer;
    z-index: 200;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 15px;

    p {
      text-align: center;
      a {
        color: var(--links);
      }
    }
  }

  @media (min-width: 1285px) {
    width: 50%;
  }
`;
