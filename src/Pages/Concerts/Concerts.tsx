import { useGetConcertsQuery } from "../../Services/ConcertApi/concertApi";
import ConcertCard from "../../Components/ConcertCards/ConcertCards";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import Haeder from "../../Components/Header/Header";
import { useAppDispatch } from "../../Redux/hooks";
import { addTocart } from "../../Redux/cartSlice";
import { notification } from "antd";
import "antd/dist/reset.css";
import "./Concerts.css";

const Concerts = () => {
  const {
    data: concerts,
    error,
    isLoading,
  } = useGetConcertsQuery("Hollywood bowl");

  const dispatch = useAppDispatch();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error("Error fetching data:", error);
    return <div>Error fetching data</div>;
  }

  if (concerts && concerts.data) {
    const concertsData = concerts.data;

    const formatDate = (dateString: string) => {
      return new Date(dateString).toLocaleDateString("en-US");
    };

    // Add to cart
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
          quantity:1,
        })
      );
      // Added to cart notfication
      notification.success({
        message: "Added to Cart",
        className: "notificationCustom",
        description: `${concert.name} has been added to your cart.`,
      });
    };

    return (
      <>
        <section className="concertsContainer">
          <Haeder />
          <div className="wrapper">
            <div className="crumbTitle">
              <h1 className="concertsContainerTitle">
                Hollywood Bowl Concerts
              </h1>
              <div style={{display:"flex"}}>
              <BreadCrumb />
             
              </div>
             
            </div>

            <div className="gridBox">
              {concertsData.map((concert: any) => (
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
          </div>
        </section>
      </>
    );
  }
  return <div>No concerts available</div>;
};

export default Concerts;
