import React from "react";
import { Carousel } from "react-bootstrap";
import { testimonialsData } from "../data/testimonials";

const Testimonial = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="section-title">What Our Clients says</h1>
      </div>
      <Carousel fade className="testimonial py-5 m-5">
        {testimonialsData &&
          testimonialsData.length > 0 &&
          testimonialsData.map((testimonial, index) => (
            <Carousel.Item key={index} className="">
              <div className="row shadow p-3 mb-5 bg-white rounded">
                <div className="col-md-3 text-center">
                  <img
                    className="profile-pic rounded border border-dark"
                    src={require(`../images/clients/${testimonial.image}`)}
                    alt="profic pic"
                  />
                  <h5 className="m-0">{testimonial.clientName}</h5>
                  <p>{testimonial.clientDesignation}</p>
                </div>
                <div className="col-md-9 d-flex align-items-center">
                  <h5 className="qualifications">" {testimonial.quote} "</h5>
                </div>
              </div>
            </Carousel.Item>
          ))}
      </Carousel>
    </>
  );
};

export default Testimonial;
