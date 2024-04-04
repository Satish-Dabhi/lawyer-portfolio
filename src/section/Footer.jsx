import React from "react";
import Fade from "react-reveal";

const Footer = () => {
  return (
    <section id="footer" className="text-center">
      <footer >
        <div className="row" style={{ "display": "block" }} >
          <Fade bottom>
            <div className="twelve columns">
              <ul className="mikeySocial row">
                <li
                  className='col-lg-3 col-md-6 col-sm-6 col-xs-6'
                  key="mail">
                  <a href="#" target="_blank" rel="noreferrer">
                    <i class="fa fa-envelope"></i>
                  </a>
                </li>
                <li
                  className='col-lg-3 col-md-6 col-sm-6 col-xs-6'
                  key="phone">
                  <a href="#"><i class="fa fa-phone"></i></a>
                </li>
              </ul>
            </div>
          </Fade>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="fa fa-arrow-up"></i>
            </a>
          </div>
        </div>
      </footer>
    </section>

  );
}

export default Footer;