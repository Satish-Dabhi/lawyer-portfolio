import React from "react";
import Fade from "react-reveal";
import { bio } from "../data/info";

const AboutUs = () => {
  console.log(
    "HUBSPOT_FORM_PORTAL_IDHUBSPOT_FORM_PORTAL_ID",
    process.env.HUBSPOT_FORM_PORTAL_ID
  );

  return (
    <section id="aboutUs">
      <div id="about">
        <Fade duration={500}>
          <div className="row">
            <div className="text-center">
              <h1 className="section-title pb-4 text-white">About Us</h1>
            </div>
            <ul>
              {bio.aboutBio.map((item) => (
                <>
                  <li className="mb-2">{item}</li>
                </>
              ))}
            </ul>
            <div>
              <h1 className="section-title pb-4 text-white">Detail Our Services</h1>
            </div>
            <ol>
              {bio.detailOurServices.map((item) => (
                <>
                  <li>{item}</li>
                </>
              ))}
            </ol>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default AboutUs;
