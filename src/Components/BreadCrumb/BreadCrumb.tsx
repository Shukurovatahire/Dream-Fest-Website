import { NavLink } from "react-router-dom";
import "./BreadCrumb.css";
import { useTranslation } from "react-i18next";

const BreadCrumb = () => {
  const { t } = useTranslation();
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
              {t("home")}
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
              {t("artists")}
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
              {t("concerts")}
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
              {t("contact")}
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
             {t("cart")}
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default BreadCrumb;
