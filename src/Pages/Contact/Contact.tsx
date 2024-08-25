import Button from "../../Components/Button/Button";
import Header from "../../Components/Header/Header";
import { notification } from "antd";
import "./Contact.css";

const Contact = () => {
  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    notification.success({
      message: "Feedback sent",
      className: "notificationCustom",
      description: "We will get back to you as soon as possible :)",
    });
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
              <span className="contactSpan">Contact</span>
              <h1 className="contactMainTitle">GET IN TOUCH</h1>
              <span className="secondSpan">
                <i>We should be hear from you</i>
              </span>
              <p className="contactParagraf">
                <i>
                  Feel free contact any time we
                  <br /> will get back to you as soon as
                  <br /> we can .
                </i>
              </p>
              <hr className="hr2" />
            </div>
            <div>
              <form className="contactForm" onSubmit={handleContactSubmit}>
                <input
                  type="text"
                  placeholder="Name"
                  className="contactInput"
                  required
                  style={{ textTransform: "capitalize" }}
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="contactInput"
                />
                <input
                  name=""
                  id=""
                  required
                  placeholder="Message"
                  style={{ textTransform: "capitalize" }}
                  className="contactInput"
                />
                <div style={{ textAlign: "right" }}>
                  <Button
                    text="Send"
                    bgColor="#e50000"
                    color="white"
                    width="140px"
                  />
                </div>
              </form>
            </div>
          </div>
          <hr
            style={{
              backgroundColor: "black",
              marginTop: "2rem",
              marginBottom: "2rem",
            }}
          />
          <div className="secondPart">
            <div className="contactItems">
              <h2>DIRECT CONTACT</h2>

              <p>
                {" "}
                Adress: FO / Fragre Obscurty 0G <br />
                Overer Mand 3, 5400 Hafiein,Austria
              </p>
            </div>
            <div className="contactItems">
              <h2>MEDIA CONTACT</h2>
              <p>
                If you are isterested in woeking us and want to noid the beauty
                of out working in your con mandil. Smory reques as FO Promo Box.
                We'll send you al onoy of it ,dinacty 10 your doorstep.
              </p>
            </div>
            <div className="contactItems">
              <h2>BETTER TOGETHER</h2>
              <p>
                Do yor want to join our anam or do an intemano we FC , sunt bee
                to sand us your portono . Wie are alwyas locking for taineted
                boys & grils.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
