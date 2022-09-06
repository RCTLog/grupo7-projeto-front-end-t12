import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-height: 73px;
  justify-content: space-between;
  padding: 41px 61px;
  align-content: flex-end;
  align-items: center;
  border-top: 2px solid #c7c7c7;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  .contact {
    display: flex;
    gap: 35px;
    align-items: center;
  }

  .contact-info {
    display: flex;
    gap: 5px;
    align-items: center;
  }

  .flex {
    display: flex;
    gap: 5px;
    align-items: center;
  }

  svg {
    height: 25px;
    width: 25px;
  }
  .facebook {
    height: 30px;
    width: 30px;
  }
  .pokeInsta {
    height: 45px;
    width: 45px;
  }
`;
