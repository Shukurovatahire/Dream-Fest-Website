import { useNavigate, useParams } from "react-router-dom";
import {  useAppSelector } from "../../Redux/hooks";
import "./Order.css";
import Header from "../../Components/Header/Header";
import Button from "../../Components/Button/Button";
import { useTranslation } from "react-i18next";

const Order = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const totalPrice = useAppSelector((state) => state.cart.totalPrice);
  const formData = useAppSelector((state) => state.cart.formData);
  const now2 = new Date().toLocaleTimeString();
  const navigate=useNavigate()
  const { id } = useParams();
  const lastSix = id ? id.slice(-6) : "";
  const now = new Date().toDateString();

  const handleOrderClick=()=>{
    if(totalPrice !== 0 ){
        navigate("/payment")
    }
  }
  const {t}=useTranslation()
  return (
    <>
      <section className="orderSection" >
        <Header />
        <div className="orderWrapper" >
          <div className="orderBox">
            <h1>
              {t("orderTitle")} <span>#{lastSix}</span>
            </h1>
          </div>
          <div className="details">
            <div className="userDetails1">
              {formData.map((item: any, index: number) => (
                <div key={index} className="userDetails">
                  <p style={{ textTransform: "capitalize" }}>
                {t("nameLabel")}: {item.surname} {item.name}
                  </p>
                  <p>
                  {t("emailLabel")}: <span style={{ color: "blue" }}>{item.email}</span>
                  </p>
                  <p> {t("mobileLabel")}: {item.mobile}</p>
                  <p>{t("deliveryMethod")}</p>
                </div>
              ))}
            </div>
            <hr />
            <div>
              <h1>{t("orderDetailsTitle")}</h1>
              <div className="orderDtails">
                {cartItems.map((item: any, index: number) => (
                  <div key={index} className="orderDtails">
                    <p>{index === 0 && t("ticketLabel")}  {item.name}, </p>
                  </div>
                ))}
                <p>
                 {t("createDateLabel")} {now}, {now2}
                </p>
                <p style={{ fontWeight: "bold" }}>
                  {t("totalPriceLabel")} <span> {totalPrice}$</span>
                </p>
                <div className="paymentBtn" style={{textAlign:"end" , marginRight:"1rem"}}>
                  <Button className="resBtn3" bgColor="#2F5384" color="white" text={t("proceedToPaymentButton")}
                   onClick={handleOrderClick}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Order;
