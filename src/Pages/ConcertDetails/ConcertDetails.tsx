import "./ConcertDetails.css";
import Haeder from "../../Components/Header/Header";
import { useGetConcertsQuery } from "../../Services/ConcertApi/concertApi";
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import ReactLeaflet from "../../Components/ReactLeaflet/ReactLeaflet";
import Footer from "../../Components/Footer/Footer";
const ConcertDetails = () => {
  const [concert, setConcert] = useState<any>(null);
  const { data: concertInfo } = useGetConcertsQuery("Hollywood bowl");
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (concertInfo && concertInfo.data && id) {
      const concertsData = concertInfo.data;
      const foundConcert = concertsData.find(
        (concert: any) => concert.concert_id === id
      );
      setConcert(foundConcert);
    }
  }, [concertInfo, id]);

  if (concert) {
    // Formatted date
    const date = concert
      ? new Date(concert.endDate).toLocaleDateString("en-En", {})
      : "Loading...";

    // Formatted description
    const formattedDesc = concert?.description
      ? concert.description.substring(
          0,
          concert.description.lastIndexOf(" at ")
        )
      : "Loading...";

    // Formatted Perpormers
    const performers = concert.performer.map((p: any) => p.name).join(" , ");

    return (
      <>
        <section className="detailContainer">
          <Haeder />
          <div className="detailWrapper">
            <div className="detailTitleContainer">
              <h1 className="detailTitle">{concert.name} concert details</h1>

              <div className="crumpFlex" style={{ display: "flex" }}>
                <BreadCrumb />
                <div className="lilCrump">
                  <span style={{ marginLeft: "6px",marginRight:"6px" }}>/</span>
                  <span className="crumbSpan">Concerts details</span>
                </div>
              </div>
            </div>
            <div className="detailBox1">
              <div className="detailBox2">
                <div className="detailFlexBox">
                  <div className="detailImg">
                    <img src={concert.image} />
                  </div>
                  <div className="aboutConcert">
                    <div className="detailTitleWrapper">
                      <h4 className="concertName">{concert.name}</h4>
                      <p className="detailDesc">{formattedDesc}</p>
                    </div>
                    <div className="detailAboutWrapper">
                      <p>Country : {concert.location.address.addressCountry}</p>
                      <p>Date : {date} , 20:00</p>
                      <p>
                        Address locality :{" "}
                        {concert.location.address.addressLocality}
                      </p>
                      <p>Street : {concert.location.address.streetAddress}</p>
                      <p>Performers : {performers}</p>
                    </div>
                  </div>
                </div>

                <div className="aboutDetail">
                  <h2>About this Performance</h2>
                  <p>
                    Over the last decade and four albums, Khruangbin has married
                    together musical influences from all over the world. Crisp
                    melodies from reverb-heavy electric guitars, rich dub-like
                    bass, and air-tight drums: Those simple ingredients add up
                    to something rich, complex, and beloved. Taking inspiration
                    from the local-meets-global cultural stew of their Houston
                    hometown, Khruangbin integrates Thai funk, spaghetti western
                    film scores, Bakersfield country, Kingston dub, West African
                    disco, G-funk, and more. Today, they invite you on a new and
                    intimate journey with their most recent album A LA
                    SALA—while playing some of the biggest shows of their
                    career. Opening the night is Unknown Mortal Orchestra, the
                    Portland-via-New Zealand band whose latest album V was
                    hailed by NME for its lo-fi funk and “sun-baked sound."
                  </p>
                </div>
              </div>

              <div className="location">
                <div className="detailMap">
                  <h2>Detailed location</h2>
                  <ReactLeaflet
                    borderR="15px"
                    width="100%"
                    height="400px"
                    latitude={concert.location.geo.latitude}
                    longitude={concert.location.geo.longitude}
                    title={concert.name}
                    address={concert.location.address.streetAddress}
                  />
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </section>
      </>
    );
  }
};

export default ConcertDetails;
