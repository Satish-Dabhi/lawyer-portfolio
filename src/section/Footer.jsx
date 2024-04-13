import React from "react";
import { bio, contactDetails } from "../data/info";

const Footer = () => {
  return (
    <section id="footer">
      <footer class="text-lg-start bg-body-tertiary text-muted text-white">
        <section class="">
          <div class="container text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-2 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4 h4">
                  <i class="fas fa-gem me-3"></i>{bio.name}
                </h6>
                <p>
                  {bio.qualification.map(item => <span>{item}, </span>)}
                </p>
              </div>
              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4 h4">
                  <i class="fas fa-building me-3"></i> NAVSARI OFFICE:
                </h6>
                <p>{contactDetails.navsariOffice.address}</p>
              </div>

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4 h4">
                  <i class="fas fa-building me-3"></i> SURAT OFFICE:
                </h6>
                <p>{contactDetails.suratOffice.address}</p>
              </div>

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4 h4">
                  <i class="fas fa-building me-3"></i> USA OFFICE:
                </h6>
                <p>{contactDetails.usaOffice.address}</p>
              </div>

              <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold mb-4 h4">Contact</h6>
                <p>
                  <i class="fas fa-envelope me-3"></i>
                  {bio.email}
                </p>
                <p><i class="fas fa-phone me-3"></i>
                  {bio.phone}
                </p>
              </div>
            </div>
          </div>
        </section>
        <div class="text-center p-4">
          © 2021 Copyright:<a class="text-reset fw-bold" href="https://krutharthpatchigar.com/">krutharthpatchigar.com</a>
        </div>
      </footer>
    </section>

  );
}

export default Footer;