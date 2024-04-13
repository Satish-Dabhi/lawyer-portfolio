import React from "react";
import Slider from "react-slick";
import { ourClients } from "../data/our-clients";
import { Fade } from "react-reveal";


function Responsive() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section id="ourClients" className="text-center card-slider">
      <h1 className="section-title pb-4">Our Clients</h1>
      <Fade duration={500}>
        <div className="slider-container">
          <Slider {...settings}>
            {ourClients.map((logo, index) => (
              <div className="justify-content-center d-flex"
              >
                <img
                  src={require(`../images/company-logo/${logo.image}`)}
                  alt={logo.name}
                  style={{ maxWidth: "100%" }}
                  className="client-logo hover-zoom"
                />
              </div>
            ))}
          </Slider>
        </div>
      </Fade>
    </section>
  );
}

export default Responsive;
