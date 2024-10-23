import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { CiUser } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";
import { FaUserCheck } from "react-icons/fa";
import { logOut } from "@/Redux/userSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { clearCart, updateLocalStorage } from "@/Redux/cartSlice";
import { FiLogOut } from "react-icons/fi";
import { MdLogin } from "react-icons/md";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [currentLanguage, setCurrentLanguage] = useState<string>("EN");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    const currentUserId = JSON.parse(
      localStorage.getItem("currentUser") || "{}"
    ).userId;
    const currentCart = JSON.parse(
      localStorage.getItem(`currentUserCart_${currentUserId}`) || "[]"
    );
    updateLocalStorage(currentCart);
    dispatch(logOut());
    dispatch(clearCart());
    setIsLoggedIn(false);
    navigate("/");
  };

  const toggleOptions = () => {
    setShowOptions((prev) => !prev);
  };
  // Translate
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
      setCurrentLanguage(savedLanguage.toUpperCase());
    }
  }, [i18n]);

  const changeLanguage = async (lng: string) => {
    try {
      await i18n.changeLanguage(lng.toLowerCase());
      localStorage.setItem("language", lng.toLowerCase());
      setCurrentLanguage(lng.toUpperCase());
      window.location.reload();
    } catch (error) {
      console.error("Failed to change language:", error);
    }
  };

  //! Current User
  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");

  return (
    <>
      <header className="header">
        <div className="headerImg">
          <Link to={"/"}>
            <img
              src="https://static.tildacdn.one/tild3437-3836-4533-a561-373461636133/logo.svg"
              alt="Logo"
              data-testid="logo-image"
            />
          </Link>
        </div>
        <div className="headerNavBar">
          <div
            className="hamburger"
            data-testid="hamburger-icon"
            onClick={toggleMenu}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="resCartBox">
            {/* Res buttons */}
            <div className="dd" style={{ position: "relative" }}>
              <div className="translate2" id="user">
                {isLoggedIn ? (
                  <FaUserCheck
                    style={{ fontSize: "21px", marginLeft: "5px" }}
                  />
                ) : (
                  <CiUser style={{ fontSize: "21px" }} />
                )}
              </div>

              {/* dropdown */}
              {isLoggedIn ? (
                <div className="dropdown">
                  <div className="profile">
                    <p> {currentUser.username}</p>
                    <p style={{ cursor: "pointer" }}>
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        to={`/profile/${currentUser.userId}`}
                      >
                        Profile
                      </Link>
                    </p>
                  </div>
                  <div className="loginP" onClick={handleLogout}>
                    Logout <FiLogOut />
                  </div>
                </div>
              ) : (
                <div className="dropdown">
                  <Link
                    to={"/login"}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <p
                      className="loginP"
                      style={{ color: "black", cursor: "pointer" }}
                    >
                      Login <MdLogin />
                    </p>
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div
            className={`responsivNavList ${isMenuOpen ? "active" : ""}`}
            role="navigation"
          >
            <IoCloseSharp className="closeBtn" onClick={toggleMenu} />
            <div className="navRes">
              <ul className="ulListRes">
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  <div onClick={toggleMenu}>{t("home")}</div>
                </Link>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/allartists"
                >
                  <li onClick={toggleMenu}>
                    <>{t("artists")}</>
                  </li>
                </Link>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/concerts"
                >
                  <li onClick={toggleMenu}>Concerts</li>
                </Link>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/contact"
                >
                  <li onClick={toggleMenu}>Contact</li>
                </Link>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/cart"
                >
                  <li onClick={toggleMenu}>Cart</li>
                </Link>

                {isLoggedIn ? (
                  <div className="loginP" onClick={handleLogout}>
                    Logout <FiLogOut />
                  </div>
                ) : (
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/login"
                  >
                    <li onClick={toggleMenu}>Singup / Login</li>
                  </Link>
                )}
              </ul>
              <div className="lng">
                <div className="lang" onClick={() => changeLanguage("AZ")}>
                  AZ
                </div>
                <div className="lang" onClick={() => changeLanguage("EN")}>
                  EN
                </div>
              </div>
            </div>
          </div>
          {/* Translate  */}
          <div className="navList">
            <ul className="ulList">
              <Link style={{ textDecoration: "none", color: "white" }} to={"/"}>
                <li>{t("home")}</li>
              </Link>

              <Link
                style={{ textDecoration: "none", color: "white" }}
                to={"/allartists"}
              >
                <li>{t("artists")}</li>
              </Link>

              <Link
                to={"/concerts"}
                style={{ textDecoration: "none", color: "white" }}
              >
                <li>{t("concerts")}</li>
              </Link>
              <Link
                to={"/contact"}
                style={{ textDecoration: "none", color: "white" }}
              >
                <li>{t("contact")}</li>
              </Link>

              <li>
                <Link
                  to={"/cart"}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <div className="cartIcon" data-testid="cart-icon">
                    <FaCartShopping />
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="translate"
            onClick={toggleOptions}
            style={{ cursor: "pointer" }}
          >
            <div>{currentLanguage}</div>
            {showOptions && (
              <div className="langBox">
                <div className="lang" onClick={() => changeLanguage("AZ")}>
                  AZ
                </div>
                <div className="lang" onClick={() => changeLanguage("EN")}>
                  EN
                </div>
              </div>
            )}
          </div>
          <div className="dd" style={{ position: "relative" }}>
            <div className="translate" id="user">
              {isLoggedIn ? (
                <FaUserCheck style={{ fontSize: "21px", marginLeft: "5px" }} />
              ) : (
                <CiUser style={{ fontSize: "21px" }} />
              )}
            </div>

            {/* dropdown */}
            {isLoggedIn ? (
              <div className="dropdown">
                <div className="profile">
                  <p>Hi,{currentUser.username}</p>
                  <p style={{ cursor: "pointer" }}>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to={`/profile/${currentUser.userId}`}
                    >
                      Profile
                    </Link>
                  </p>
                </div>
                <div className="loginP" onClick={handleLogout}>
                  Logout <FiLogOut />
                </div>
              </div>
            ) : (
              <div className="dropdown">
                <Link
                  to={"/login"}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <p
                    className="loginP"
                    style={{ color: "black", cursor: "pointer" }}
                  >
                    Login <MdLogin />
                  </p>
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>
      <div className="hr"></div>
    </>
  );
};

export default Header;
