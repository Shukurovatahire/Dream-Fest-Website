import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import "./header.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="headerImg">
          <img
            src="https://static.tildacdn.one/tild3437-3836-4533-a561-373461636133/logo.svg"
            alt="photo"
          />
        </div>
        <div className="headerNavBar">
          <div>
            <ul className="ulList">
              <Link style={{ textDecoration: "none", color: "white" }} to={"/"}>
                <li>Home</li>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to={"/allartists"}
              >
                <li>Artists</li>
              </Link>

              <Link
                to={"/concerts"}
                style={{ textDecoration: "none", color: "white" }}
              >
                <li>Concerts</li>
              </Link>
              <Link
                to={"/contact"}
                style={{ textDecoration: "none", color: "white" }}
              >
                <li>Contact</li>
              </Link>

              <li>
                <Link
                  to={"/cart"}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <div className="cartIcon">
                    <FaCartShopping />
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="translate">
            <div>En</div>
          </div>
        </div>
      </header>
      <div className="hr"></div>
    </>
  );
};

export default Header;
