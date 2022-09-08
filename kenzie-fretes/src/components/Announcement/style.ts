import styled from "styled-components";

export const AnnouncementContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 500px;

  justify-content: space-between;
  padding: 1rem;
  background-color: var(--grey-2);
  border-radius: 10px;
  box-shadow: 4px 4px 4px var(--grey-1);
  gap: 50px;
  .announcement-info {
    .name-menu{
        display:flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
    font-size: 18px;
    display:flex;
    flex-direction: column;
    gap: 20px;
    h3{
        font-size: 16px;
        color: var(--color-primary);
    }
    h2{
        font-size: 18px;
    }
    height: 100%;
    span {
      display: flex;
      width: 90%;
      justify-content: space-between;
      .container-origin-announcement,
      .container-destination-announcement {
        display: flex;
      }
    }
  }
`;
