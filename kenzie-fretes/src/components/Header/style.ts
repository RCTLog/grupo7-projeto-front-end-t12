import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 85px;
  align-content: center;
  align-items: center;
  box-shadow: 0px 4px 4px #e9e9e9;

  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    gap: 20px;

    svg {
      height: 32px;
      width: 32px;
    }

    img {
      height: 60px;
      width: 60px;
    }
  }
  .Logo {
    height: 68px;
    width: 244px;
  }

  button {
    border-radius: 10px;
  }
`;
