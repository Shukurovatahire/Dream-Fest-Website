import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import React, { useEffect, useState } from "react";
import Button from "../../Components/Button/Button";
import Header from "../../Components/Header/Header";
import { clearCart, saveCardData } from "../../Redux/cartSlice";
import backg from "../../assets/backg.svg";
import "./Payment.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { RingLoader } from "react-spinners";
import { notification } from "antd";

const Payment = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const totalPrice = useAppSelector((state) => state.cart.totalPrice);
  const cardDataArray = useAppSelector((state) => state.cart.cardData);
  const [cardDatas, setCardDatas] = useState([]);
  const months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  const years = ["2025", "2026", "2027", "2028"];

  if (totalPrice === 0) {
    navigate("/");
  }

  //   Submit card data
  const handlePaySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (totalPrice === 0) {
      navigate("/");
    }
    setIsLoading(true);

    dispatch(saveCardData(cardDatas));
    saveArrayToLocalStorage([...cardDataArray, cardDatas]);

    setTimeout(() => {
      setIsLoading(false);

      notification.success({
        message: t("Your payment was successful"),
        duration: 2,
        onClose: () => {
          navigate("/");
        },
        className: "notificationCustom",
      });

      dispatch(clearCart());
    }, 4000);
  };
  useEffect(() => {
    saveArrayToLocalStorage(cardDataArray);
  }, [cardDataArray]);
  // Input changes
  const handleFormInputsChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    //   Only number input
    if (name === "cardNumber" && !/^\d*$/.test(value)) {
      return;
    }
    setCardDatas((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  //  Select changes
  const handleSelectChanges = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCardDatas((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  // Save data to local storage
  const saveArrayToLocalStorage = (array: any[]) => {
    localStorage.setItem("cardData", JSON.stringify(array));
  };
  const savedData = JSON.parse(localStorage.getItem("cardData") || "[]");
  return (
    <>
      <div className="allSection">
        <div style={{ color: "white" }}>
          <Header />
        </div>
        <div
          className="paymentWrapper"
          style={{
            backgroundImage: `url(${backg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <section className="paymentSection">
            <div className="paymentBox">
              <div className="payDetails">
                {isLoading ? (
                  <div
                    className="loading"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      gap: "1rem",
                      fontSize: "20px ",
                    }}
                  >
                    <RingLoader color="#0066FF" size={95} />
                    <p>Processing payment, please wait... </p>
                  </div>
                ) : (
                  <div>
                    <div className="payImg">
                      <h1 style={{ marginTop: "1rem", color: "#4e4e4e" }}>
                        {t("payWithCard")}
                      </h1>
                      <img
                        src="https://ecomm.pashabank.az/ecomm2/template/0022358/images/partners.jpg"
                        alt=""
                      />
                    </div>
                    <form className="payForm" onSubmit={handlePaySubmit}>
                      <label>
                        <span> {t("cardHolderName")}</span>

                        <input
                          type="text"
                          name="fullName"
                          placeholder="Azer Aliyev"
                          required
                          onChange={handleFormInputsChanges}
                        />
                      </label>
                      <label>
                        <span>Card Number</span>

                        <input
                          data-testid="input-card"
                          type="text"
                          placeholder="0000 0000 0000 0000"
                          name="cardNumber"
                          maxLength={16}
                          required
                          onChange={handleFormInputsChanges}
                        />
                      </label>

                      <div className="dateDetails">
                        <label>
                          {t("month")}
                          <select name="month" onChange={handleSelectChanges} required>
                            <option value="">MM</option>
                            {months.map((month, index) => (
                              <option key={index} value={month}>
                                {month}
                              </option>
                            ))}
                          </select>
                        </label>
                        <label>
                          <span>{t("year")}</span>
                          <select name="year" onChange={handleSelectChanges} required>
                            <option>YY</option>
                            {years.map((year, index) => (
                              <option key={index} value={year}>
                                {year}
                              </option>
                            ))}
                          </select>
                        </label>
                        <label>
                          <span>CVV</span>
                          <input
                            className="sscInput"
                            type="password"
                            placeholder="..."
                            maxLength={3}
                            name="ssc"
                            required
                            onChange={handleFormInputsChanges}
                          />
                        </label>
                      </div>
                      <div className="totalHeader">
                        <p>
                          {t("totalPrice")} {totalPrice}$
                        </p>
                      </div>
                      <div style={{ textAlign: "right", marginRight: "1rem" }}>
                        <Button
                          bgColor="#2f5384"
                          color="white"
                          text={t("payButton")}
                          className="resBtn4"
                        />
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Payment;
