import React from "react";
import Fade from "react-reveal";
import { bio } from "../data/info";

const About = () => {
  console.log(
    "HUBSPOT_FORM_PORTAL_IDHUBSPOT_FORM_PORTAL_ID",
    process.env.HUBSPOT_FORM_PORTAL_ID
  );

  return (
    <section id="about">
      <Fade duration={500}>
        <div className="row">
          <div className="three columns left-section">
            <img
              className="profile-pic"
              src={require("../images/krutarth.png")}
              alt="profic pic"
            />
            <h2 className="m-3">{bio.name}</h2>
          </div>
          <div className="nine columns main-col text-white">
            {bio.about.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
            <br />
            <h2 >Our Services</h2>
            <ul>
              {bio.services.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default About;
