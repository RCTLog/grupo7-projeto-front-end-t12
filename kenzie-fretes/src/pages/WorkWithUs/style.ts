import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  .logo_top {
    width: 60%;
    max-width: 500px;
    min-height: 8vh;
    margin-bottom: 1rem;

    animation: fadeInDown 1s;
  }

  .main {
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    min-height: 50vh;

    animation: fadeIn 1s;

    button {
      color: var(--chinese-black);
      border: none;
      background-color: transparent;
      width: 75px;
      font-size: 1.2rem;
    }
    
    a {
      display: flex;
      color: black;
      align-items: center;
      font-size: 1.2rem;
    }

    h2 {
      font-size: 1.5rem;
    }
  }

`;

export const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100vw;
  display: flex;
  justify-content: center;
  
  `;


export default Container;