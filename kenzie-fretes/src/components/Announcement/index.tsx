import { AnnouncementContainer } from "./style";
import AnnouncementMenu from "../AnnouncementMenu";
const Announcement = () => {
  return (
    <AnnouncementContainer className="announcement-container">
      <div className="announcement-info">
        <span className="name-menu">
            <h3>Fernanda Silva</h3>
            <AnnouncementMenu />
        </span>
        <h2>Preciso de um frete para levar alguns móveis</h2>

        <span className="announcement-origin-destination">
          <div className="container-origin-announcement">
            <p>Origem: </p>
            <p> Pirai-RJ</p>
          </div>
          <div className="container-destination-announcement">
            <p>Destino: </p>
            <p> Resende-RJ</p>
          </div>
        </span>
      </div>
    </AnnouncementContainer>
  );
};

export default Announcement;
