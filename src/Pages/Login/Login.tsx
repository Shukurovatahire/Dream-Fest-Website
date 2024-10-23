import Header from "@/Components/Header/Header";
import bgImage from "../../assets/loging.svg";
import Button from "../../Components/Button/Button";
import "./Login.css";
import React, { useEffect, useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useAppDispatch } from "@/Redux/hooks";
import { Concert, loadCart } from "@/Redux/cartSlice";
import { logIn } from "@/Redux/userSlice";

const Login = () => {
  const allUsers = JSON.parse(localStorage.getItem("allUsers") || "[]");
  const loginBackground = bgImage;
  const [username, setUsername] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handLogin = () => {
    setLogin(!login);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Set Cookie

  const setCookie = (name: string, value: string, hours: number) => {
    const date = new Date();
    date.setTime(date.getTime() + hours * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  };

  const autoLogout = () => {
    // 6 saat sonra otomatik olarak çıkış yap
    setTimeout(() => {
      localStorage.removeItem("currentUser"); // Kullanıcıyı çıkış yaptır
      // Çerezi sil
      document.cookie =
        "authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      navigate("/login"); // Giriş sayfasına yönlendir
    }, 6 * 60 * 60 * 1000); // 6 saat (milisaniye)
  };
  //   RegEx for password
  const validatePassword = (password: string) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNummer = /\d/.test(password);
    return hasNummer && hasUpperCase;
  };

  //   Password change
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setUserPassword(e.target.value);
  };
  const handeUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handeEmailnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // Add poduct to cart
  const handleAddToCart = (product: any) => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      const updatedCart = [...currentUser.cart, product];
      currentUser.cart = updatedCart;
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
    } else {
      alert("Please login to add items to your cart.");
    }
  };

  //   Submit  Register Form
  const handleRegisterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validatePassword(password)) {
      setErrorMessage(
        "Password must contain at least one uppercase letter and one number."
      );
    } else {
      setErrorMessage("");
    }
    const users = JSON.parse(localStorage.getItem("allUsers") || "[]");
    const userExists = users.some((user: any) => user.email === email);

    // Add new user & Control
    if (userExists) {
      setErrorMessage("User already exists.");
    } else {
      const newUser = { username, email, password, userId: uuidv4(), cart: [] };
      users.push(newUser);
      localStorage.setItem("allUsers", JSON.stringify(users));
      setLogin(true);
      alert("Registration successful!");
    }
  };

  //   Submit sing in Form
  const handleSignInSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("allUsers") || "[]");
    const userExists = users.find((user: any) => user.email === email);
    if (userExists && userExists.password === password) {
      setCookie("authToken", uuidv4(), 6);
      alert("Login successful!");
      console.log(userExists);

      localStorage.setItem("currentUser", JSON.stringify(userExists));
      const currentUserCart: Concert[] = JSON.parse(localStorage.getItem(`currentUserCart_${userExists.userId}`) || "[]");;
      if ( Array.isArray(currentUserCart)) {
        dispatch(loadCart(currentUserCart)); 
      }

      dispatch(logIn(userExists));
      autoLogout();
      navigate("/cart");
    } else {
      setErrorMessage("Invalid email or password.");
    }
  };

  return (
    <>
      <section className="loginSection">
        <Header />
        <div className="loginContainer">
          <div className="photoPart">
            <img
              src="https://preview.colorlib.com/theme/bootstrap/login-form-07/images/undraw_remotely_2j6y.svg"
              alt=""
            />
          </div>

          <div className="generalBox">
            {/* Register */}
            {login ? (
              <div className="singIn">
                <div className="ifHaveAcconut">
                  <p>
                    Don't have an account?
                    <span
                      onClick={handLogin}
                      style={{
                        color: "#6C63FF",
                        cursor: "pointer",
                        marginLeft: "3px",
                      }}
                    >
                      Sing up
                    </span>
                  </p>
                </div>
                <h2>Welcome to Dream Fest</h2>
                <p
                  style={{
                    color: "#6C63FF",
                    fontWeight: "bold",
                    fontSize: "25px",
                  }}
                >
                  Sing
                  <span
                    style={{
                      color: "white",
                      fontWeight: "normal",
                      marginLeft: "3px",
                    }}
                  >
                    in
                  </span>
                </p>

                <div className="loginFormm">
                  <form className="loginForm" onSubmit={handleSignInSubmit}>
                    <label className="eyeInput">
                      <span className="lSpan">Password</span>
                      <div
                        className="passwordIcon"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? (
                          <IoEye className="eyeIcon" />
                        ) : (
                          <IoMdEyeOff className="eyeIcon" />
                        )}
                      </div>
                      <input
                        required
                        type={showPassword ? "text" : "password"}
                        onChange={handlePasswordChange}
                      />
                      {errorMessage && (
                        <p
                          className="errorMesage"
                          style={{
                            color: "red",
                            fontSize: "12px",
                            marginTop: "5px",
                          }}
                        >
                          {errorMessage}
                        </p>
                      )}
                    </label>
                    <label>
                      <span className="lSpan">Email</span>
                      <input
                        type="email"
                        required
                        onChange={handeEmailnameChange}
                      />
                    </label>
                    <div className="registerButtons">
                      <Button
                        text="Sing In"
                        bgColor="#6C63FF"
                        color="white"
                        className="loginBtn"
                      />
                    </div>
                  </form>
                </div>
              </div>
            ) : (
              // sing in
              <div className="partForm">
                <div className="ifHaveAcconut">
                  <p>
                    Already have an account ?
                    <span
                      onClick={handLogin}
                      style={{
                        color: "#6C63FF",
                        cursor: "pointer",
                        marginLeft: "3px",
                      }}
                    >
                      Sing in
                    </span>
                  </p>
                </div>
                <h2>Welcome to Dream Fest</h2>
                <p>Register your account</p>

                <div className="loginFormm">
                  <form className="loginForm" onSubmit={handleRegisterSubmit}>
                    <label>
                      <span className="lSpan">Username</span>
                      <input
                        type="text"
                        required
                        onChange={handeUsernameChange}
                      />
                    </label>
                    <label className="eyeInput">
                      <span className="lSpan">Password</span>
                      <div
                        className="passwordIcon"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? (
                          <IoEye className="eyeIcon" />
                        ) : (
                          <IoMdEyeOff className="eyeIcon" />
                        )}
                      </div>
                      <input
                        required
                        type={showPassword ? "text" : "password"}
                        onChange={handlePasswordChange}
                      />
                      {errorMessage && ( // Sadece hata olduğunda mesajı göster
                        <p
                          className="errorMesage"
                          style={{
                            color: "red",
                            fontSize: "12px",
                            marginTop: "5px",
                          }}
                        >
                          {errorMessage}
                        </p>
                      )}
                    </label>
                    <label>
                      <span className="lSpan">Email</span>
                      <input
                        type="email"
                        required
                        onChange={handeEmailnameChange}
                      />
                    </label>
                    <div className="registerButtons">
                      <Button
                        text="Login"
                        bgColor="#6C63FF"
                        color="white"
                        className="loginBtn"
                      />
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
