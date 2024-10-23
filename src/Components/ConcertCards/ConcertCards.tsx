import React from "react";
import Button from "../Button/Button";
import "./ConcertCards.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
interface ICardProps {
  url: string;
  name: string;
  date: string;
  id: string;
  handleClick: (
    concert: {
      id: string;
      name: string;
      url: string;
      date: string;
    }
  ) => void;
}
const ConcertCard: React.FC<ICardProps> = (props) => {
  const { url, name, date, id, handleClick } = props;

  const { t } = useTranslation();

  const fallbackImageUrl =
    "https://i.guim.co.uk/img/media/0d961031d7d7da69525fef264d5a8d81235bcb5b/0_0_7182_4309/master/7182.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d453cfeacf206882f14f6e4beec7f509";

  return (
    <>
      <div className="cardContainer2" data-testid="concert-card">
        <div className="imgConatiner">
          <img
            src={url || fallbackImageUrl}
            onError={(e) => (e.currentTarget.src = fallbackImageUrl)}
          />
        </div>
        <div className="descriptionContainer">
          <div className="titleContainer2">
            <h1 className="concertName">{name}</h1>
            <p className="concertDate">{date}</p>
          </div>
          <div className="btnContainer">
            <Link to={`/concertdetail/${id}`}>
              <Button
                text={t("full_details")}
                bgColor="rgba(253, 53, 90, 1)"
                color="white"
                className="resBtn1"
              />
            </Link>

            <Button
              text={t("added_to_cart")}
              bgColor="rgba(253, 53, 90, 1)"
              color="white"
              className="resBtn1"
              onClick={() => handleClick({ id, name, url, date })}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ConcertCard;
