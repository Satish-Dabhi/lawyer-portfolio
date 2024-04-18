import React, { useState } from "react";
import { Fade } from "react-reveal";
import Slider from "react-slick";
import { portfolioImages } from "../data/info";
import VCenterModal from "../component/VCenterModal";

function PortFolio() {
  const [modalShow, setModalShow] = useState(false);
  const [modalContent, setModalContent] = useState({});

  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
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
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section id="portfolio" className="text-center card-slider">
      <VCenterModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        data={modalContent}
      />
      <h1 className="section-title pb-4">Portfolio</h1>
      <Fade duration={500}>
        <div className="slider-container">
          <Slider {...settings}>
            {portfolioImages.map((item, index) => (
              <div className="justify-content-center d-flex"
              >
                <img
                  src={require(`../images/portfolio/${item.image}`)}
                  alt={item.name}
                  style={{ maxWidth: "100%", cursor: 'pointer' }}
                  className="client-logo hover-zoom"
                  onClick={() => {
                    setModalShow(true);
                    const content = <img
                      src={require(`../images/portfolio/${item.image}`)}
                      alt={item.name}
                      style={{ maxWidth: "100%" }}
                    />;
                    const mContent = {
                      title: item.name,
                      content: content
                    }
                    setModalContent(mContent);
                  }}
                />
              </div>
            ))}
          </Slider>
        </div>
      </Fade>
    </section>
  );
}

export default PortFolio;
