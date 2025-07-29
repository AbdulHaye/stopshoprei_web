import React from "react";
import "./../NavbarFirst/navbar.css";
function Navbar() {
  return (
    <>
      <div className="social-call container-fluid row justify-content-between">
        <div className=" col-sm-4 col-md-6 col=lg-4 ">
          <div className="px-4 row">
            <a className="info-bar-atag col-sm-4">
              <div className="row mt-2">
                <div className="col-sm-6 col-md-2 ">
                  <i className="fa-solid fa-phone px-2 nav-info-bar-icon"></i>
                </div>
                <div className="col-sm-6 mt-2 col-md-10">
                  <p className="callus px-0">Call us +1 903 564 1993</p>
                </div>
              </div>
            </a>
            <a className="info-bar-atag col-sm-8">
              <div className="row mt-2">
                <div className="col-sm-1">
                  <i className="fa-solid fa-envelope px-2 nav-info-bar-icon"></i>
                </div>
                <div className="col-sm-11 mt-2">
                  <p className="emailus">Email Us: info@stopshoprei.com</p>
                </div>
              </div>
            </a>
            {/* <a className="info-bar-atag d-flex align-items-center"><i className="fa-solid fa-phone px-2 nav-info-bar-icon"></i>Call Us: +92 315 7847415 </a>
                <a className="info-bar-atag d-flex align-items-center "> <i className="fa-solid fa-envelope px-2 nav-info-bar-icon"></i>Email Us: info@360synergytech.com</a> */}
          </div>
        </div>
        <div className=" col-sm-4 col-md-4 col-lg-4 mt-2">
          <div className="socialicons row ">
            <div className="nav-info-tag col-sm-6">
              <a className="faq">FAQ</a>
              <div className="vertical-line mx-2 "></div>
              <a className="aboutus">ABOUT US</a>
            </div>
            <div className="col-sm-6">
              <div className="row">
                <a
                  href="https://ideed.com"
                  className="nav-info-bar-icon col-sm-2"
                >
                  <i className="nav-info-bar-icon fa-brands fa-linkedin mx-0 a-height-set"></i>
                </a>
                <a
                  href="https://facebook.com"
                  className="nav-info-bar-icon col-sm-2"
                >
                  <i className="nav-info-bar-icon fa-brands fa-facebook-square mx-0 a-height-set"></i>
                </a>
                <a
                  href="https://instagram.com"
                  className="nav-info-bar-icon col-sm-2"
                >
                  <i className="nav-info-bar-icon fa-brands fa-instagram mx-0 a-height-set"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
