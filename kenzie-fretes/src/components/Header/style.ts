import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  padding: 0 5%;
  position: fixed;

  align-content: center;
  align-items: center;
  box-shadow: 0px 4px 4px #e9e9e9;

  .Logo {
    display: none;
    width: 244px;
  }

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
      width: 60px;
      border-radius: 50%;
    }
  }


  button {
    border-radius: 10px;
  }

  @media screen and (min-width: 775px) {
    justify-content: space-between;
    .Logo {
      display: block;
    }
  }
`;
