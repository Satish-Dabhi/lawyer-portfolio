import React from "react";
import Fade from "react-reveal";
import Typewriter from 'typewriter-effect';
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
                            <h1 className="responsive-headline">John Smith</h1>
                        </Fade>
                        <Fade bottom duration={1800}>
                            <h2>
                                <Typewriter
                                    options={{
                                        strings: ['Corporate Law Specialist', 'Mergers and Acquisitions Expert', 'Legal Counsel'],
                                        autoStart: true,
                                        loop: true,
                                    }} />
                            </h2>
                        </Fade>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeroBanner;

