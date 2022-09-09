import styled from "styled-components"

const Container = styled.form`
  width: 100%;
  max-width: 700px;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  padding: 1rem;
  background-color: var(--grey-2);
  border-radius: 5px;
  box-shadow: 4px 4px 4px var(--grey-1);

  .select-1 {
    display: flex;
    justify-content: flex-start;
  }
  .select-2 {
    display: flex;
    justify-content: flex-end;
  }
`

export default Container
