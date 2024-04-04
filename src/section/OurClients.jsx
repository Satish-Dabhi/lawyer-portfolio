import React from "react";
import { Col, Row } from "react-bootstrap";
import Fade from "react-reveal";
import { ourClients } from "../data/our-clients";

const OurClients = () => {

  return (
    <section id="ourClients" className="text-center">
      <h1 className='section-title pb-4'>Our Clients</h1>
      <Fade duration={500}>
        <Row>
          {ourClients.map((logo) => (
            <Col key={logo.id} xs={12} sm={4} md={3} className="text-center mb-3">
              <img
                src={require(`../images/company-logo/${logo.image}`)}
                alt={logo.name}
                style={{ maxWidth: '100%' }}
                className="client-logo"
              />
            </Col>
          ))}
        </Row>
      </Fade>
    </section>
  );
}

export default OurClients;