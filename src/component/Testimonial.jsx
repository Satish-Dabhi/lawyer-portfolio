import React from 'react';
import { Carousel } from 'react-bootstrap';
import { testimonialsData } from '../data/testimonials';

const Testimonial = () => {
    console.log('testimonialsDatatestimonialsData', testimonialsData);
    return (
        <><div className="text-center">
            <h1 className='section-title'>What Our Clients says</h1>
        </div><Carousel fade className='testimonial'>
                {testimonialsData && testimonialsData.length > 0 && testimonialsData.map((testimonial, index) => (
                    <Carousel.Item key={index}>
                        <div className="row">
                            <div className="col-md-3">
                                <img
                                    className="profile-pic"
                                    src={require(`../images/clients/${testimonial.image}`)}
                                    alt="profic pic" />
                                <h2>{testimonial.clientName}</h2>
                                <p>{testimonial.clientDesignation}</p>
                            </div>
                            <div className="col-md-9">

                                <h5 className="qualifications">
                                    " {testimonial.quote} "
                                </h5>
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel></>
    );
}

export default Testimonial;
