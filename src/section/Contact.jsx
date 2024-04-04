import React, { useEffect } from 'react';
import '../style/contact-us.css';

const Contact = () => {

  console.log('process.env.HUBSPOT_FORM_ID',process.env.HUBSPOT_FORM_ID);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/v2.js';
    document.body.appendChild(script);

    script.addEventListener('load', () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: 45769008,
          formId: '9f33ea3d-d304-4747-a1eb-7e9d0b492773',
          target: '#hubspotForm'
        })
      }
    });
  }, []);

  return (
    <section id="contactinfo">
      <div className="text-center">
        <h1 className="section-title pb-3 pt-0">Contact Us</h1>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="wrapper">
              <div className="row no-gutters mb-5">
                <div className="col-md-7">
                  <div className="contact-wrap w-100 px-8">
                    <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>

                    <div id="hubspotForm"></div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div id="map">
                    <iframe
                      title="Google Map"
                      width="600"
                      height="450"
                      frameBorder="0"
                      style={{ border: 0 }}
                      src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10934.079600027973!2d72.55718162835903!3d23.023484021581822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1712123608639!5m2!1sen!2sin"}
                      allowFullScreen=""
                      aria-hidden="false"
                      tabIndex="0"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
