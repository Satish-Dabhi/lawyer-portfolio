import React from "react";
import { bio, contactDetails } from "../data/info";

const Footer = () => {
  return (
    <section id="footer">
      <footer className="text-lg-start bg-body-tertiary text-muted text-white">
        <section className="">
          <div className="container text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-2 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4 h4">
                  <i className="fas fa-gem me-3"></i>{bio.name}
                </h6>
                <p>
                  {bio.qualification.map((item, index) => <span key={index}>{item}, </span>)}
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4 h4">
                  <i className="fas fa-building me-3"></i> NAVSARI OFFICE:
                </h6>
                <p>{contactDetails.navsariOffice.address}</p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4 h4">
                  <i className="fas fa-building me-3"></i> SURAT OFFICE:
                </h6>
                <p>{contactDetails.suratOffice.address}</p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4 h4">
                  <i className="fas fa-building me-3"></i> USA OFFICE:
                </h6>
                <p>{contactDetails.usaOffice.address}</p>
              </div>

              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4 h4">Contact</h6>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  {bio.email}
                </p>
                <p><i className="fas fa-phone me-3"></i>
                  {bio.phone}
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="text-center p-4">
          © 2021 Copyright:<a className="text-reset fw-bold" href="https://krutharthpatchigar.com/">krutharthpatchigar.com</a>
        </div>
      </footer>
    </section>

  );
}

export default Footer;