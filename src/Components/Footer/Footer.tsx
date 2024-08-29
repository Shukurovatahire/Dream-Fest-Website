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
            <hr className="footerHr" />
            <div className="">
              <div className="socialMedia">
                <a
                  href="https://www.facebook.com/dreamfestbaku/?_rdr"
                  target="_blank"
                   aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
                <a href="https://x.com/dreamsfest" target="_blank"   aria-label="Twitter">
                  <FaTwitter />
                </a>
                <a
                  href="https://www.instagram.com/dream.musicfest/"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>

                <a href="https://www.google.com" target="_blank"  aria-label="Google">
                  <FaGoogle />
                </a>
                <a href="https://github.com/Shukurovatahire/Dream-Fest-Website.git" target="_blank"  aria-label="Github">
                  <FaGithub />
                </a>
                <a href="linkedin.com" target="_blank"   aria-label="Linkedin">
                  <FaLinkedin />
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
                  <li>Dream Fest at Azerbaijan</li>
                  <li>Dream Fest Helpdesk</li>
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
