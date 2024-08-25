import { NavLink } from "react-router-dom";
import "./BreadCrumb.css";

const BreadCrumb = () => {
  return (
    <>
      <div className="breadCrumbContainer">
        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "rgba(253, 53, 90, 1)" : "white",
              })}
            >
              Home
            </NavLink>
            <span>/</span>
          </li>
          <li>
            <NavLink
              to="/allartists"
              style={({ isActive }) => ({
                color: isActive ? "rgba(253, 65, 99)" : "white",
              })}
            >
              All artists
            </NavLink>
            <span>/</span>
          </li>
          <li>
            <NavLink
              to="/concerts"
              style={({ isActive }) => ({
                color: isActive ? "rgba(253, 53, 90, 1)" : "white",
                textDecoration: "none",
              })}
            >
              Concerts
            </NavLink>
            <span>/</span>
          </li>

          
          <li>
            <NavLink
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? "rgba(253, 53, 90, 1)" : "white",
                textDecoration: "none",
              })}
            >
              Contact
            </NavLink>
            <span>/</span>
          </li>

          <li>
            <NavLink
              to="/cart"
              style={({ isActive }) => ({
                color: isActive ? "rgba(253, 53, 90, 1)" : "white",
                textDecoration: "none",
              })}
            >
              Shopping Cart
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default BreadCrumb;
