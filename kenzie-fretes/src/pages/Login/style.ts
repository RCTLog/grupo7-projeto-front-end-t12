import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(90, 139, 183);
  background: -moz-linear-gradient(
    90deg,
    rgba(235, 140, 91, 1) 50%,
    rgba(90, 139, 183, 1) 50%
  );
  background: -webkit-linear-gradient(
    90deg,
    rgba(235, 140, 91, 1) 50%,
    rgba(90, 139, 183, 1) 50%
  );
  background: linear-gradient(
    90deg,
    rgba(235, 140, 91, 1) 50%,
    rgba(90, 139, 183, 1) 50%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#eb8c5b",endColorstr="#5a8bb7",GradientType=1);

  .login-container {
    width: 100%;
    max-width: 485px;
    height: 100vh;

    display: flex;

    justify-content: center;
    align-items: center;
    gap: 100px;

    background-color: #ffffff;

    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);

    .login-image {
      display: none;
      width: 50%;

      img {
        width: 100%;
      }
    }
    @media (min-width: 485px) {
      width: 90%;
      height: 100vh;
      border-radius: 15px;
      max-height: 600px;
    }
    @media (min-width: 1280px) {
      width: 70%;
      max-width: 1176px;
      height: 600px;
      border-radius: 15px;
      .login-image {
        display: block;
      }
    }
  }
`

export const LoginWrap = styled.div`
  width: 100%;
  max-width: 300px;
  height: 100px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  .arrowBack {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;

    p {
      text-align: center;
      a {
        color: var(--links);
      }
    }
  }

  @media (min-width: 1280px) {
    width: 50%;
  }
`
