import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import React, { useEffect, useState } from "react";
import Button from "../../Components/Button/Button";
import Header from "../../Components/Header/Header";
import { saveCardData } from "../../Redux/cartSlice";
import backg from "../../assets/backg.svg"
import "./Payment.css";

const Payment = () => {
  const dispatch = useAppDispatch();
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

  //   Submit card data
  const handlePaySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(saveCardData(cardDatas));
    saveArrayToLocalStorage([...cardDataArray, cardDatas]);
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
  console.log(savedData, 1);
  console.log(cardDataArray, 2);
  return (
    <>
    <div className="allSection"style={{backgroundImage:`url(${backg})`}}>
      <div style={{ color: "white" }}>
        <Header />
      </div>
      <section className="paymentSection" >
        <div className="paymentBox">
          <div className="payDetails">
            <div className="payImg">
              <h1 style={{ marginTop: "1rem", color: "#4e4e4e" }}>
                Pay with card
              </h1>
              <img
                src="https://ecomm.pashabank.az/ecomm2/template/0022358/images/partners.jpg"
                alt=""
              />
            </div>
            <form className="payForm" onSubmit={handlePaySubmit}>
              <label>
                <span> Card Holder Name</span>

                <input
                  type="text"
                  name="fullName"
                  placeholder="Azer Aliyev"
                  onChange={handleFormInputsChanges}
                />
              </label>
              <label>
                <span>Card Number</span>

                <input
                  type="text"
                  placeholder="0000 0000 0000 0000"
                  name="cardNumber"
                  maxLength={16}
                  onChange={handleFormInputsChanges}
                />
              </label>
              <div className="dateDetails">
                <label>
                  Month
                  <select name="month" onChange={handleSelectChanges}>
                    <option value="">MM</option>
                    {months.map((month, index) => (
                      <option key={index} value={month}>
                        {month}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  <span>Year </span>
                  <select name="year" onChange={handleSelectChanges}>
                    <option>YY</option>
                    {years.map((year, index) => (
                      <option key={index} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  <span>SSC</span>
                  <input
                    className="sscInput"
                    type="password"
                    placeholder="..."
                    maxLength={3}
                    name="ssc"
                    onChange={handleFormInputsChanges}
                  />
                </label>
              </div>
              <div className="totalHeader">
                <p>Total price: {totalPrice}$</p>
              </div>
              <div style={{ textAlign: "right", marginRight: "1rem" }}>
                <Button
                  bgColor="#2f5384"
                  color="white"
                  text="Pay"
                  width="150px"
                />
              </div>
            </form>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Payment;
