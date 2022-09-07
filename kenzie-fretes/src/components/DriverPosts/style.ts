import styled from "styled-components"

export const Container = styled.div`
  width: 100%;

  overflow: hidden;
  padding: 20px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  padding-top: 130px;

  .filters {
    max-width: 728px;
  }

  .center {
    display: flex;
    justify-content: center;
  }

  .post-card {
    width: 80%;
    max-width: 728px;
    height: max-content;

    padding: 15px 15px;

    align-items: center;

    background-color: var(--grey-2);
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    .post-name {
      color: var(--color-primary);
      font-size: 20px;
      font-weight: 700;
    }

    .post-description {
      font-size: 18px;
      font-weight: 600;
    }
  }
`
