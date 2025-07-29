import React from "react";
import Slider from "react-slick";
import "./../Integration/integration.css";
import aweber from "./../../Assets/Integration/aweber.png";
import callloop from "./../../Assets/Integration/callloop.png";
import callrail from "./../../Assets/Integration/callrail.png";
import click2mail from "./../../Assets/Integration/click2mail.png";
import docusign from "./../../Assets/Integration/docusign.png";
import dropbox from "./../../Assets/Integration/dropbox.png";
import googledrive from "./../../Assets/Integration/googledrive.png";
import investcarrot from "./../../Assets/Integration/investcarrot.png";
import jotform_logo from "./../../Assets/Integration/Jotform_logo.png";
import lead from "./../../Assets/Integration/LeadPropeller_logo_gray_full_size.png";
import lob from "./../../Assets/Integration/lob.png";
import mailchimp from "./../../Assets/Integration/Mailchimp-Logo-2018-present.png";
import mandrill from "./../../Assets/Integration/mandrill-logo.png";
import onedrive from "./../../Assets/Integration/OneDrive-Logo.png";
import podio from "./../../Assets/Integration/podio-logo.png";
import twilio from "./../../Assets/Integration/twilio.png";
import zapierlogo from "./../../Assets/Integration/zapierlogo.png";
import ZillowLogo from "./../../Assets/Integration/ZillowLogo.png";

function Integration() {
  const settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
    speed: 7000,
    infinite: true,
    pauseOnHover: false,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <p className="integration mt-5">INTEGRATIONS</p>
      <div className="brands">
        {/* <div className="brand_title"></div> */}
        <Slider {...settings}>
          <div>
            <div className="brand_section_top">
              <img src={aweber} className="brands_image" alt="" />
            </div>
          </div>

          <div>
            <div className="brand_section_top">
              <img src={callloop} className="brands_image" alt="" />
            </div>
          </div>

          <div>
            <div className="brand_section_top">
              <img src={callrail} className="brands_image" alt="" />
            </div>
          </div>

          <div>
            <div className="brand_section_top">
              <img src={docusign} className="brands_image" alt="" />
            </div>
          </div>

          <div>
            <div className="brand_section_top">
              <img src={dropbox} className="brands_image" alt="" />
            </div>
          </div>

          <div>
            <div className="brand_section_top">
              <img src={googledrive} className="brands_image" alt="" />
            </div>
          </div>

          <div>
            <div className="brand_section_top">
              <img src={investcarrot} className="brands_image" alt="" />
            </div>
          </div>

          <div>
            <div className="brand_section_top">
              <img src={jotform_logo} className="brands_image" alt="" />
            </div>
          </div>

          <div>
            <div className="brand_section_top">
              <img src={lead} className="brands_image" alt="" />
            </div>
          </div>

          <div>
            <div className="brand_section_top">
              <img src={lob} className="brands_image" alt="" />
            </div>
          </div>

          <div>
            <div className="brand_section_top">
              <img src={mandrill} className="brands_image" alt="" />
            </div>
          </div>

          <div>
            <div className="brand_section_top">
              <img src={onedrive} className="brands_image" alt="" />
            </div>
          </div>
          <div>
            <div className="brand_section_top">
              <img src={click2mail} className="brands_image" alt="" />
            </div>
          </div>

          <div>
            <div className="brand_section_top">
              <img src={podio} className="brands_image" alt="" />
            </div>
          </div>

          <div>
            <div className="brand_section_top">
              <img src={twilio} className="brands_image" alt="" />
            </div>
          </div>

          <div>
            <div className="brand_section_top">
              <img src={zapierlogo} className="brands_image" alt="" />
            </div>
          </div>

          <div>
            <div className="brand_section_top">
              <img src={ZillowLogo} className="brands_image" alt="" />
            </div>
          </div>
          <div>
            <div className="brand_section_top">
              <img src={mailchimp} className="brands_image" alt="" />
            </div>
          </div>

          
        </Slider>
      </div>
    </>
  );
}

export default Integration;
