import Button from "../../Components/Button/Button";
import Header from "../../Components/Header/Header";
import { notification } from "antd";
import "./Contact.css";
import Footer from "../../Components/Footer/Footer";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import BreadCrumb from "@/Components/BreadCrumb/BreadCrumb";

const Contact = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    notification.success({
      message: t("Contact.feedbackSuccessMessage"),
      className: "notificationCustom",
      description: t("Contact.feedbackSuccessDescription"),
    });
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <>
      <section className="contactSection">
        <div className="hdr">
          <Header></Header>
        </div>
        <div className="contactWrapper">
          <div className="firstPart">
            <div className="contactTitle">
              <span className="contactSpan">{t("Contact.title")}</span>
              <h1 className="contactMainTitle">{t("Contact.mainTitle")}</h1>
              <span className="secondSpan">
                <i>{t("Contact.subtitle")}</i>
              </span>
              <p className="contactParagraf">
                <i>
                  {t("Contact.description1")}
                  <br />
                  {t("Contact.description2")}
                  <br />
                  {t("Contact.description3")}
                </i>
              </p>
            </div>
            <div>
              <form className="contactForm" onSubmit={handleContactSubmit}>
                <input
                  type="text"
                  placeholder={t("Contact.form.namePlaceholder")}
                  className="contactInput"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{ textTransform: "capitalize" }}
                />
                <input
                  type="email"
                  placeholder={t("Contact.form.emailPlaceholder")}
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="contactInput"
                />
                <input
                  name=""
                  id=""
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t("Contact.form.messagePlaceholder")}
                  style={{ textTransform: "capitalize" }}
                  className="contactInput"
                />
                <div style={{ textAlign: "right" }}>
                  <Button
                    text={t("Contact.form.sendButton")}
                    bgColor="#e50000"
                    color="white"
                    className="resBtn"
                  />
                </div>
              </form>
            </div>
          </div>
          <hr
            className="noneHr"
            style={{
              backgroundColor: "black",
              marginTop: "2rem",
              marginBottom: "2rem",
            }}
          />
          <div className="secondPart">
            <div className="contactItems">
              <h2>{t("Contact.directContact")}</h2>

              <p>
                {t("Contact.directContactAddress1")} <br />
                {"Contact.directContactAddress2"}
              </p>
            </div>
            <div className="contactItems">
              <h2>{t("Contact.mediaContact")}</h2>
              <p>{t("Contact.mediaContactDescription")}</p>
            </div>
            <div className="contactItems">
              <h2>{t("Contact.betterTogether")}</h2>
              <p>{t("Contact.betterTogetherDescription")}</p>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Contact;
