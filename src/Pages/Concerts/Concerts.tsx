import { useGetConcertsQuery } from "../../Services/ConcertApi/concertApi";
import ConcertCard from "../../Components/ConcertCards/ConcertCards";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import Haeder from "../../Components/Header/Header";
import { useAppDispatch } from "../../Redux/hooks";
import { addTocart } from "../../Redux/cartSlice";
import { notification } from "antd";
import "antd/dist/reset.css";
import "./Concerts.css";
import Footer from "../../Components/Footer/Footer";
import { useTranslation } from "react-i18next";
import { RingLoader } from "react-spinners";

const Concerts = () => {
  const {
    data: concerts,
    error,
    isLoading,
  } = useGetConcertsQuery("Hollywood bowl");
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US");
  };
  const handleCartClick = (concert: {
    id: string;
    name: string;
    url: string;
    date: string;
  }) => {
    dispatch(
      addTocart({
        concert_id: concert.id,
        name: concert.name,
        endDate: concert.date,
        image: concert.url,
        quantity: 1,
      })
    );
    // const concertsData = concerts.data;

    if (concerts && concerts.data) {
      // Add to cart
      // Added to cart notfication
      notification.success({
        message: t("concert_added_to_cart"),
        duration:1,
        className: "notificationCustom",
        description: `${concert.name}  ${t("concert_added_to_cart")}`,
      });
    }
  };
  // return <div>No concerts available</div>;
  return (
    <>
      <section className="concertsContainer">
        <Haeder />
        <div className="wrapper">
          <div className="crumbTitle">
            <h1 className="concertsContainerTitle">
              {t("hollywood_bowl_concerts")}
            </h1>
            <div className="containerBreadC" style={{ display: "flex" }}>
              <BreadCrumb />
            </div>
          </div>
          {!isLoading ? (
            <div className="gridBox">
              {concerts.data?.map((concert: any) => (
                <ConcertCard
                  handleClick={handleCartClick}
                  key={concert.concert_id}
                  url={concert.image}
                  name={concert.description}
                  date={formatDate(concert.endDate)}
                  id={concert.concert_id}
                />
              ))}
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "1rem",
                fontSize: "20px ",
              }}
            >
              <RingLoader color="#e50a0a" size={95}/>
              <p>Loading . . . </p>
            </div>
          )}
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Concerts;
