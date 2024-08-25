import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section className="footerSection">
        <div className="FooterContainer">
          <div className="footerContent">
            <p className="footerTitle">More From Dream Fest</p>
            <hr  className="footerHr"/>
            <div className="">
              <div className="socialMedia">
                <a href="" target="_blank">
                  <FaFacebookF />
                </a>
                <a href="" target="_blank">
                  <FaTwitter />
                </a>
                <a href="" target="_blank">
                  <FaInstagram />
                </a>
                <a href="" target="_blank">
                  <img
                    className="imgLogo"
                    src="https://lumiere-a.akamaihd.net/v1/images/tiktok-logo-white_dd1a4867.svg?region=0%2C0%2C100%2C100"
                  />
                </a>
                <a href="" target="_blank">
                  <FaGoogle />
                </a>
                <a href="" target="_blank">
                  <FaGithub />
                </a>
              </div>
              <div className="copyRight">
                <p>TM & © Lucasfilm Ltd. All Rights Reserved</p>
                <ul>
                  <li>Terms of Use</li>
                  <li>Additional Content Information</li>
                  <li>Privacy Policy</li>
                  <li>Children's Online Privacy Policy</li>
                  <li>Your US State Privacy Rights</li>
                  <li>Star Wars at shopDisney</li>
                  <li>Star Wars Helpdesk</li>
                  <li>Interest-Based Ads</li>
                  <li>Do Not Sell or Share My Personal Information</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
