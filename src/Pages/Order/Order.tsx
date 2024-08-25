import { useNavigate, useParams } from "react-router-dom";
import {  useAppSelector } from "../../Redux/hooks";
import "./Order.css";
import Header from "../../Components/Header/Header";
import Button from "../../Components/Button/Button";

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
  return (
    <>
      <section className="orderSection" >
        <Header />
        <div className="orderWrapper" >
          <div className="orderBox">
            <h1>
              Order <span>#{lastSix}</span>
            </h1>
          </div>
          <div className="details">
            <div className="userDetails1">
              {formData.map((item: any, index: number) => (
                <div key={index} className="userDetails">
                  <p style={{ textTransform: "capitalize" }}>
                    Name: {item.surname} {item.name}
                  </p>
                  <p>
                    Email: <span style={{ color: "blue" }}>{item.email}</span>
                  </p>
                  <p>Molibe: {item.mobile}</p>
                  <p>Delivery method: Electronic ticket </p>
                </div>
              ))}
            </div>
            <hr />
            <div>
              <h1>Order details</h1>
              <div className="orderDtails">
                {cartItems.map((item: any, index: number) => (
                  <div key={index} className="orderDtails">
                    <p>{index === 0 && "Your ticket :"} {item.name}, </p>
                  </div>
                ))}
                <p>
                  Create date: {now}, {now2}
                </p>
                <p style={{ fontWeight: "bold" }}>
                  Total price: <span> {totalPrice}$</span>
                </p>
                <div className="paymentBtn" style={{textAlign:"end" , marginRight:"1rem"}}>
                  <Button width="200px" bgColor="#2F5384" color="white" text="Proceed to payment"
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
