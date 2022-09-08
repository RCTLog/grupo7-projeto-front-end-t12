import styled from "styled-components"

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  animation: fadeIn 1s;

  .main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .info-container {
      width: 100%;
      margin-top: 70px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`

export default Container

export const ContainerObjectDashboard = styled.section`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
