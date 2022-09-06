import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  margin: 35px 182px;

  align-items: center;
  gap: 37px;
  .userImg {
    height: 228px;
    width: 228px;
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
`;
