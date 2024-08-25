
import "./ArtistCard.css";
import { useState } from "react";

interface IProps {
  text: string;
  image: string;
  musicLink: string;
}
const ArtistCard: React.FC<IProps> = (props) => {
  const { text, image, musicLink } = props;
  const [isClicked, setIsClicked] = useState(false);

  const handleCardClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="cardBox" onClick={handleCardClick}>
      <a target="_blank" href={musicLink}>
        <div className="appleMusicLink">
          <img
            src="https://static.tildacdn.one/tild3266-6662-4339-a433-383236363733/Group_1948754425.svg"
            alt=""
          />
        </div>
      </a>
      <div className="artsitName">
        <p className="nameParagraf">{text}</p>
      </div>
      <div
        className="artistPhoto"
        style={{
          backgroundImage: `url(${image})`,
          top: isClicked ? "33%" : "-1px",
        }}
      ></div>
    </div>
  );
};

export default ArtistCard;
