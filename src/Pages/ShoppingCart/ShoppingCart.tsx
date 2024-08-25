import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import Header from "../../Components/Header/Header";
import { FaTrash } from "react-icons/fa6";
import { notification } from "antd";
import { v4 as uuidv4 } from "uuid";
import "antd/dist/reset.css";
import "./ShoppingCart.css";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  saveFormData,
} from "../../Redux/cartSlice";
import { useEffect, useState } from "react";
import Button from "../../Components/Button/Button";
import { useNavigate } from "react-router-dom";
// UUID
const uniqueId = uuidv4();

// Formatted description
const truncateDescription = (description: string, delimiter: string) => {
  const index = description.lastIndexOf(delimiter);
  return index !== -1 ? description.substring(0, index) : description;
};

// Formatted date
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US");
};
interface FormData {
  name: string;
  surname: string;
  email: string;
  mobile: string;
}

const ShoppingCart = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const cartItems = useAppSelector((state) => state.cart.items);
  const totalPrice = useAppSelector((state) => state.cart.totalPrice);
  const [selectedName, setSelectedName] = useState<string>("");
  const [activIndex, setActivIndex] = useState<number | null>(null);
  const [formData, setFormdata] = useState<FormData>({
    name: "",
    surname: "",
    email: "",
    mobile: "",
  });
  const [errors, setErrors] = useState<string[]>([]);
  const [showQuantityOptions, setShowQuantityOptions] =
    useState<boolean>(false);

  //  Delete from cart
  const handleRemove = (concertId: string) => {
    dispatch(removeFromCart(concertId));

    // Added to cart notfication
    notification.success({
      message: "Deleted from cart",
      className: "notificationCustom",
      description: "The ticket has been deleted from your cart.",
    });
  };

  // Checked data
  const handleInputClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSelectedName(
      value === "electron" ? "Electronic ticket or voucher" : "At sales points"
    );
  };

  // Quantity click handle
  const handleQuantityClick = (index: number) => {
    setActivIndex(index);
    setShowQuantityOptions(true);
  };

  // Auto-hide quantity options after 3 seconds
  useEffect(() => {
    let timer: number;
    if (showQuantityOptions) {
      timer = window.setTimeout(() => {
        setShowQuantityOptions(false);
        setActivIndex(null);
      }, 4000);
    }

    return () => {
      window.clearTimeout(timer);
    };
  }, [showQuantityOptions]);
  console.log(uniqueId);

  // Submit form
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(saveFormData(formData));
    const newErrors: string[] = [];
    if (!formData.name) newErrors.push("Name is required.");
    if (!formData.surname) newErrors.push("Surname is required.");
    if (!formData.mobile || isNaN(Number(formData.mobile)))
      newErrors.push("Valid mobile number is required.");
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.push("Valid email is required.");

    if (newErrors.length > 0) {
      setErrors(newErrors);
    } else {
      setErrors([]);
      dispatch(saveFormData(formData));
      navigate(`/order/${uniqueId}`);
    }
  };

  // Changes form inputs
  const handleFormInputsChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <section className="cartContainer">
        <div>
          <Header />
        </div>

        <div className="cartWrapper">
          <div>
            <h1 className="cartTitle">Sopping Cart</h1>
            <BreadCrumb></BreadCrumb>
          </div>
          <div className="tickestAndPaymentBox">
            <div className="cartBox">
              <h4 className="yourCart">Your cart</h4>
              <div className="yourTickets">
                {cartItems.length === 0 ? (
                  <p
                    style={{
                      fontSize: "20px",
                      fontWeight: "500",
                      color: "rgb(103 103 103)",
                    }}
                  >
                    Your cart is empty
                  </p>
                ) : (
                  <div className="itemMapBox">
                    {cartItems.map((item: any, index: number) => (
                      <div key={item.concert_id}>
                        <div className="ticketFlexBox">
                          <div>
                            <div className="arrayBox">
                              <img src={item.image} className="cardImage" />
                              <div className="textArrBox">
                                <p
                                  style={{
                                    fontWeight: "500",
                                    maxWidth: "280px",
                                  }}
                                >
                                  {truncateDescription(item.name, " at ")}
                                </p>
                                <p>{formatDate(item.endDate)} , 20:00</p>
                                <div className="price">
                                  <p style={{ margin: "0" }}>35$</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="addTicket">
                            {activIndex === index ? (
                              <div className="increaseQuantity">
                                <div
                                  className="decrease"
                                  onClick={() =>
                                    dispatch(decreaseQuantity(item.concert_id))
                                  }
                                >
                                  -
                                </div>
                                <p
                                  style={{ fontSize: "19px" }}
                                  onClick={() => handleQuantityClick(index)}
                                >
                                  {item.quantity}
                                </p>
                                <div
                                  className=" increase"
                                  onClick={() =>
                                    dispatch(increaseQuantity(item.concert_id))
                                  }
                                >
                                  +
                                </div>
                              </div>
                            ) : (
                              <div
                                className="quantity"
                                onClick={() => handleQuantityClick(index)}
                              >
                                <p>{item.quantity}</p>
                              </div>
                            )}

                            <div
                              className="removeButton"
                              onClick={() => handleRemove(item.concert_id)}
                            >
                              <FaTrash />
                            </div>
                          </div>
                        </div>
                        {index < cartItems.length - 1 && (
                          <hr
                            style={{
                              marginTop: "2rem",
                              height: "0.5px",
                              backgroundColor: "lightgrey",
                              border: "none",
                            }}
                          />
                        )}
                      </div>
                    ))}

                    <div className="deliveryConatiner">
                      <h1>Choose a delivery method</h1>
                      <div className="boxFlexx">
                        <div>
                          <input
                            type="radio"
                            id="electron"
                            name="deliveyMethod"
                            value="electron"
                            onChange={handleInputClick}
                          />
                          <label className="deliveryLabel" htmlFor="electron">
                            <img src="https://cdn.iticket.az/icons/delivery_methods/1.svg" />
                            <span className="spn">
                              Electronic ticket or voucher
                            </span>
                          </label>
                        </div>

                        <div>
                          <input
                            type="radio"
                            id="sales"
                            name="deliveyMethod"
                            value="sales"
                            onChange={handleInputClick}
                          />
                          <label className="deliveryLabel" htmlFor="sales">
                            <img src="https://cdn.iticket.az/icons/delivery_methods/3.svg" />
                            <span className="spn">At sales points</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="payment">
              <h4 className="paymetTitle">Delivery method</h4>
              <h3 style={{ fontWeight: "600" }}>
                {selectedName
                  ? selectedName
                  : "Electronic ticket or voucher (in PDF format)"}
              </h3>

              <form className="myForm" onSubmit={handleSubmit}>
                <h4 className="paymetTitle" style={{ marginBottom: "-5px" }}>
                  User information
                </h4>
                {errors.length > 0 && (
                  <div style={{ color: "red" }}>
                    {errors.map((error, index) => (
                      <p key={index}>{error}</p>
                    ))}
                  </div>
                )}
                <input
                  type="text"
                  required
                  placeholder="Name"
                  name="name"
                  onChange={handleFormInputsChanges}
                />
                <input
                  type="text"
                  required
                  placeholder="Surname"
                  name="surname"
                  onChange={handleFormInputsChanges}
                />
                <input
                  type="tel"
                  name="mobile"
                  id=""
                  required
                  placeholder="Mobile"
                  onChange={handleFormInputsChanges}
                />
                <input
                  type="email"
                  name="email"
                  id=""
                  required
                  placeholder="Email"
                  onChange={handleFormInputsChanges}
                  style={{ textTransform: "lowercase" }}
                />

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <p className="totalPrice">Total</p>
                  {totalPrice === 0 ? (
                    ""
                  ) : (
                    <span className="totalNum">{totalPrice}$</span>
                  )}
                </div>
                <div className="checkBoxContainer">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    required
                    style={{ height: "20px", width: "20px" }}
                  />
                  <p>I accept the terms and conditions.</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "1rem",
                  }}
                >
                  {/* <Link to={`/order/${uniqueId}`}> */}
                  <Button
                    text="Create an order"
                    bgColor="rgb(253, 53, 90)"
                    color="white"
                    width="200px"
                    disabled={totalPrice === 0}
                  />
                  {/* </Link> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShoppingCart;
