import React from "react";
import Fade from "react-reveal";
import { Link } from "react-scroll";
import Typewriter from 'typewriter-effect';
import { bio } from "../data/info";
import '../style/header.css';

const HeroBanner = () => {

    return (
        <>
            <div id="home"
                className="hero-banner"
            >
                <div className="row banner">
                    <div className="banner-text">
                        <Fade bottom>
                            <h1 className="responsive-headline">{bio.name}</h1>
                        </Fade>
                        <Fade bottom duration={1800}>
                            <h2>
                                <Typewriter
                                    options={{
                                        strings: bio.qualification,
                                        autoStart: true,
                                        loop: true,
                                    }} />
                            </h2>
                        </Fade>
                        <button type="button" className="portfolio-btn mt-5">
                            <Link to="contactinfo" spy={true} smooth={true} offset={10} duration={400}>Book Your Consultation</Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeroBanner;

