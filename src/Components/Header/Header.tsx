  import { Link } from "react-router-dom";
  import { FaCartShopping } from "react-icons/fa6";
  import "./header.css";
  import React from "react";
  import { useEffect, useState } from "react";
  import { AiOutlineClose } from "react-icons/ai";
  import { useTranslation } from "react-i18next";
  import { IoCloseSharp } from "react-icons/io5";

  const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [showOptions, setShowOptions] = useState<boolean>(false);
    const [currentLanguage, setCurrentLanguage] = useState<string>("EN");
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
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
              <Link
                to={"/cart"}
                style={{ textDecoration: "none", color: "white" }}
              >
                <div className="cartIcon">
                  <FaCartShopping />
                </div>
              </Link>
            </div>
            <div className={`responsivNavList ${isMenuOpen ? "active" : ""}`} role="navigation">
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
            {/* Translate burda */}
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
          </div>
        </header>
        <div className="hr"></div>
      </>
    );
  };

  export default Header;
