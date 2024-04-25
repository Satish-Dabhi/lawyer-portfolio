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

            <h2 className="section-title pb-4 text-white">⍟ <u>Proprietor at Immigration Now</u></h2>
            {bio.proprietorAtImmigrationNow.map((item, index) => (
              <p key={index}>{item}</p>
            ))}

            <h2 className="section-title pb-4 text-white">⍟ <u>About Me</u></h2>
            {bio.aboutMe.map((item, index) => (
              <p key={index} className="mb-2">{item}</p>
            ))}

            <h2 className="section-title pb-4 text-white">⍟ <u>Our Mission</u></h2>
            {bio.ourMission.map((item, index) => (
              <p key={index} className="mb-2">{item}</p>
            ))}

            <h2 className="section-title pb-4 text-white">⍟ <u>Why Choose Immigration Now</u></h2>
            <div className="columns">
              <ol>
                {bio.whyChooseImmigrationNow.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ol>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default AboutUs;
