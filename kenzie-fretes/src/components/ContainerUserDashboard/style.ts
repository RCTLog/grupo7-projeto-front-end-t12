import styled from "styled-components"

export const Container = styled.section`
  display: flex;
  width: 90%;
  align-items: center;
  padding: 20px 0;
  gap: 37px;

  .userImg {
    width: 150px;
    border-radius: 50%;
  }

  .userName {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 35px;
    line-height: 42px;

    color: #eb8c5b;
    width: 252px;
    height: 42px;
  }

  @media (max-width: 450px) {
    width: 100%;
    justify-content: space-around;
    gap: 10px;
    .userName {
      width: fit-content;
    }

    .userImg {
      width: 75px;
    }
  }
`
