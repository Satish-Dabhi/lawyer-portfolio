import React from "react";
import Slider from "react-slick";
import { testimonialsData } from "../data/testimonials";

const Testimonial = () => {

  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  return (
    <>
      <section id="testimonial">
        <div className="text-center">
          <h1 className="section-title">What Our Clients says</h1>
        </div>

        <div className="slider-container">
          <Slider {...settings}>
            {testimonialsData &&
              testimonialsData.length > 0 &&
              testimonialsData.map((testimonial) => (
                <div class="testimonial">
                  <blockquote>
                    {testimonial.quote}
                  </blockquote>
                  <div></div>
                  <cite>
                    {testimonial.clientName}</cite>
                </div>
              ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
