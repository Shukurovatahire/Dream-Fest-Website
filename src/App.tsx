import { useEffect, useState, useTransition } from "react";
import "./App.css";
import React from 'react';
import ReactLeaflet from "./Components/ReactLeaflet/ReactLeaflet";
import Haeder from "./Components/Header/Header";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
function App() {
  const {t}=useTranslation()
  const images = [
    "https://optim.tildacdn.one/tild6434-6463-4536-b063-626133396639/-/format/webp/slider.jpg",
    "https://optim.tildacdn.one/tild6538-3261-4266-a335-326130333665/-/format/webp/3.jpg",
    "https://optim.tildacdn.one/tild3863-3262-4434-b430-653331653837/-/format/webp/2.jpg",
  ];

  const festivalImages = [
    "https://optim.tildacdn.one/tild6661-3233-4132-a339-663766383866/-/format/webp/photo_52873135330774.jpg",
    "https://optim.tildacdn.one/tild3034-3336-4432-a636-626631373934/-/format/webp/photo_52873135330774.jpg",
    "https://optim.tildacdn.one/tild3838-3535-4639-b664-313032353165/-/format/webp/photo_52873135330774.jpg",
    "https://optim.tildacdn.one/tild3839-6537-4331-b539-383033303932/-/format/webp/photo_52873135330774.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCarouselIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="container">
        <section className="mainSection">
          <Haeder />

          <section className="wrapperSection">
            <section className="aboutSection">
              <div className="aboutMax">
                <div className="centerImg">
                  <div className="aboutImg">
                    <img
                      src="https://optim.tildacdn.one/tild3362-3530-4261-b264-363138323264/-/format/webp/Stage_1.png"
                      alt="photo"
                    />
                  </div>
                  <div className="imgRealativ">
                    <img
                      src="https://static.tildacdn.one/tild6166-6432-4838-b564-343264313961/_1235.svg"
                      alt=""
                    />
                    <div className="dateContainer">
                      <span className="blueSpan">{t("july_dates")}</span>
                      <span className="blueSpan">18:00-23:30</span>
                      <span className="whiteSpan">
                        SEA BREEZE, <br /> BAKU
                      </span>
                    </div>
                  </div>
                </div>
                <div className="titleContainer">
                  <p className="aboutTitle">
                  {t('event_description')}
                  </p>
                  <div className="ageLimit">
                    <div className="age">12+</div>
                  </div>
                </div>
              </div>
            </section>

            <section className="infoSection">
              <div className="infoTitle">
                <p>
                {t('info')}
                </p>
              </div>
              <div className="aboutFestival">
                <img src="https://static.tildacdn.one/tild6430-6434-4764-a637-386536323564/DREAM_FEST.svg" />
                <p>
                 {t("festival_description")}
                </p>
              </div>

              <div
                className="toAllArtists"
                style={{ backgroundImage: `url(${images[currentIndex]})` }}
              >
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to={"allartists"}
                >
                  <button className="btnToALLStars">{t("all_artists")}</button>{" "}
                </Link>
              </div>

              <div className="lineUp">
                <div>
                  <h1>{t("lineup")}</h1>
                  <div className="line"></div>
                </div>
                <div className="dateWrapper">
                  <div className="dateContainers">
                    <div className="dateDay">23</div>
                    <div className="dateMonth">/07</div>
                  </div>
                  <div className="starsContainer">
                    <ul>
                      <li>Thomas Anders</li>
                      <li>HADDAWAY</li>
                      <li>DR. ALBAN</li>
                      <li>BURAK YETER</li>
                      <li>EMIN</li>
                      <li>Imagination feat. leee john</li>
                      <li>ROYA</li>
                      <li>JAH KHALIB</li>
                      <li>LUSIA CHEBOTINA</li>
                      <li>BAHH TEE & TURKEN</li>
                      <li>GLUK'OZA</li>
                      <li>ZVONKIY</li>
                      <li>MOT</li>
                      <li>HANNA</li>
                      <li>ANI LORAK</li>
                    </ul>
                  </div>
                </div>
                <div className="line"></div>
                <div className="dateWrapper">
                  <div className="dateContainers">
                    <div className="dateDay">24</div>
                    <div className="dateMonth">/07</div>
                  </div>
                  <div className="starsContainer">
                    <ul>
                      <li>THOMAS ANDERS</li>
                      <li>HADDAWAY</li>
                      <li>DR. ALBAN</li>
                      <li>BURAK YETER</li>
                      <li>EMIN</li>
                      <li>Imagination feat. leee john</li>
                      <li>ROYA</li>
                      <li>JAH KHALIB</li>
                      <li>LUSIA CHEBOTINA</li>
                      <li>BAHH TEE & TURKEN</li>
                      <li>GLUK'OZA</li>
                      <li>ZVONKIY</li>
                      <li>MOT</li>
                      <li>HANNA</li>
                      <li>ANI LORAK</li>
                    </ul>
                  </div>
                </div>

                <div className="line"></div>
                <div className="dateWrapper">
                  <div className="dateContainers">
                    <div className="dateDay">25</div>
                    <div className="dateMonth">/07</div>
                  </div>
                  <div className="starsContainer">
                    <ul>
                      <li>Yulianna Karaulova</li>
                      <li>HADDAWAY</li>
                      <li>DR. ALBAN</li>
                      <li>BURAK YETER</li>
                      <li>EMIN</li>
                      <li>Imagination feat. leee john</li>
                      <li>ROYA</li>
                      <li>JAH KHALIB</li>
                      <li>LUSIA CHEBOTINA</li>
                      <li>BAHH TEE & TURKEN</li>
                      <li>GLUK'OZA</li>
                      <li>ZVONKIY</li>
                      <li>MOT</li>
                      <li>HANNA</li>
                      <li>ANI LORAK</li>
                    </ul>
                  </div>
                </div>
                <div className="line"></div>
                <div className="dateWrapper">
                  <div className="dateContainers">
                    <div className="dateDay">26</div>
                    <div className="dateMonth">/07</div>
                  </div>
                  <div className="starsContainer">
                    <ul>
                      <li>Jason Derulo</li>
                      <li>IMANY</li>
                      <li>Samra</li>
                      <li>Outlandish</li>
                      <li>EMIN</li>
                      <li>Imagination feat. leee john</li>
                      <li>ROYA</li>
                      <li>JAH KHALIB</li>
                      <li>LUSIA CHEBOTINA</li>
                      <li>BAHH TEE & TURKEN</li>
                      <li>GLUK'OZA</li>
                      <li>ZVONKIY</li>
                      <li>MOT</li>
                      <li>HANNA</li>
                      <li>ANI LORAK</li>
                    </ul>
                  </div>
                </div>
                <div className="line"></div>
                <div className="dateWrapper">
                  <div className="dateContainers">
                    <div className="dateDay">27</div>
                    <div className="dateMonth">/07</div>
                  </div>
                  <div className="starsContainer">
                    <ul>
                      <li>CRAIG DAVID presents TS5</li>
                      <li>K-Maro</li>
                      <li>original Enigma voices</li>
                      <li>JONY</li>
                      <li>EMIN</li>
                      <li>Imagination feat. leee john</li>
                      <li>ROYA</li>
                      <li>JAH KHALIB</li>
                      <li>LUSIA CHEBOTINA</li>
                      <li>BAHH TEE & TURKEN</li>
                      <li>GLUK'OZA</li>
                      <li>ZVONKIY</li>
                      <li>MOT</li>
                      <li>HANNA</li>
                      <li>ANI LORAK</li>
                    </ul>
                  </div>
                </div>
                <div className="line"></div>
                <div className="dateWrapper">
                  <div className="dateContainers">
                    <div className="dateDay">28</div>
                    <div className="dateMonth">/07</div>
                  </div>
                  <div className="starsContainer">
                    <ul>
                      <li>LUSIA CHEBOTINA</li>
                      <li>BOSSON</li>
                      <li>RAFET EL ROMAN</li>
                      <li>BURAK YETER</li>
                      <li>EMIN</li>
                      <li>Imagination feat. leee john</li>
                      <li>ROYA</li>
                      <li>JAH KHALIB</li>
                      <li>LUSIA CHEBOTINA</li>
                      <li>BAHH TEE & TURKEN</li>
                      <li>GLUK'OZA</li>
                      <li>ZVONKIY</li>
                      <li>MOT</li>
                      <li>HANNA</li>
                      <li>ANI LORAK</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="line"></div>
              <div className="carousel">
                <h1>{t("previous_festivals")}</h1>
                <div
                  className="toAllArtists"
                  style={{
                    backgroundImage: `url(${festivalImages[currentCarouselIndex]})`,
                  }}
                ></div>
              </div>
              <div className="line"></div>
              <div className="socialCintainer">
                <p className="socialCintainerParagraf">
                {t("shuttle_info")}
                </p>
                <p className="socialCintainerParagraf2">
                 {t("shuttle_schedule1")} <br />
                  <p>{t("shuttle_schedule2")}</p>
                </p>
                <p className="socialCintainerParagraf3">
                 {t("free_transfer")}
                </p>
              </div>
              <div className="line"></div>
              <div className="instaContact">
                <a
                  target="_blank"
                  href="https://www.instagram.com/dream.musicfest/?igsh=MW9lMjM4NXBmajhlbQ%3D%3D"
                >
                  <img
                    className="instaImg"
                    src="https://static.tildacdn.one/tild3933-3339-4364-b466-306365303431/Group_1948754411.svg"
                  />
                </a>

                <p style={{ opacity: "0.5", textTransform: "uppercase" }}>
                 {t("contact_info")}
                </p>
                <p className="instaContactP">
                 {t("address")}
                </p>
              </div>
            </section>
          </section>
          <div className="">
            <ReactLeaflet
              borderR="0"
              width="100%"
              height="400px"
              latitude={40.5894}
              longitude={49.9822}
              title="DREAM FEST INTERATIONAL MUSIC FESTIVAL"
              address="  Баку, Сабунчинский район, пос. Нардаран, д. 32A"
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
