import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  flex-direction: row;
  justify-content: end;
  padding: 0 5%;
  position: fixed;
  background-color: white;

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
      cursor: pointer;
    }

    img {
      width: 50px;
      height: 50px;
      object-fit: cover;
      border-radius: 100%;
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
