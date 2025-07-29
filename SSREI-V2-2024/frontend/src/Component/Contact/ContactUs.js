import React, { useEffect, useRef, useState } from "react";
import emailform from "./../../Assets/email_svgform.svg";
import phoneform from "./../../Assets/phone_svgform.svg";
import clockform from "./../../Assets/office_svgform.svg";
import locationform from "./../../Assets/location_svgform.svg";
import "./ContactUs.css"; // Reuse AboutUs.css for consistent styling
import NavbarMain from "../NavbarUpper/NavbarMain";
import Map from "./Map";
import Testimonial from "../TestimonailSection/Testimonial";
import Footer from "../FooterStop/Footer";
import ServicesAbout from "../AllServices/ServicesAbout";

function ContactUs() {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    scrollToTop();
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const checkboxRef = useRef(null);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    type: "Contact Us",
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const recaptchaResponse = window.grecaptcha.getResponse();
    if (!recaptchaResponse) {
      document.getElementById("recaptchaError").innerText =
        "Please complete the reCAPTCHA verification.";
      return;
    }
    setLoading(true);

    fetch("https://workflow-automation.podio.com/catch/0o5p7e2076tny93", {
      mode: "no-cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      timeout: 10000,
    })
      .then(() => {
        setLoading(false);
        setFormData({
          type: "Contact Us",
          name: "",
          email: "",
          phone: "",
          website: "",
          message: "",
        });
        window.grecaptcha.reset();
        setNotificationMessage("Your message has been sent successfully!");
        setTimeout(() => {
          setNotificationMessage("");
        }, 4000);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
        setFormData({
          type: "Contact Us",
          name: "",
          email: "",
          phone: "",
          website: "",
          message: "",
        });
        window.grecaptcha.reset();
        setNotificationMessage(
          "There was an error sending your message. Please try again."
        );
        setTimeout(() => {
          setNotificationMessage("");
        }, 4000);
      });
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div>
      <NavbarMain />
      <div>
        <div className="service_back">
          <div className="list_building mt-5 mb-5 pt-4">Contact Us</div>
        </div>
        <ServicesAbout />
        <Testimonial />
        <div className="contact-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12 info-column">
                <div className="info-cards-container">
                  <div className="info-card">
                    <div className="icon-wrapper">
                      <img src={phoneform} className="icon" alt="phone" />
                    </div>
                    <div>
                      <h3 className="info-title">Telephone Number</h3>
                      <p className="info-text">+1 959-210-0950</p>
                    </div>
                  </div>
                  {/* <div className="info-card">
                    <div className="icon-wrapper">
                      <img src={locationform} className="icon" alt="location" />
                    </div>
                    <div>
                      <h3 className="info-title">Company Location</h3>
                      <p className="info-text"></p>
                    </div>
                  </div> */}
                  <div className="info-card">
                    <div className="icon-wrapper">
                      <img src={emailform} className="icon" alt="email" />
                    </div>
                    <div>
                      <h3 className="info-title">Our Email Address</h3>
                      <p className="info-text">info@stopshoprei.com</p>
                    </div>
                  </div>
                  <div className="info-card">
                    <div className="icon-wrapper">
                      <img src={clockform} className="icon" alt="clock" />
                    </div>
                    <div>
                      <h3 className="info-title">Office Time</h3>
                      <p className="info-text">Mon - Fri</p>
                      <p className="info-text">(9AM - 5PM EST)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="form-container">
                  <div className="form-header">
                    <h2 className="form-heading">Get In Touch</h2>
                    {/* <p className="form-paragraph">
                      Lorem ipsum dolor sit amet consectetur adipiscing, elit
                      libero facilisis donec laoreetridiculis
                    </p> */}
                  </div>
                  <form onSubmit={handleSubmit} className="form">
                    <input
                      className="form-input"
                      placeholder="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      type="text"
                    />
                    <div className="row form-row">
                      <div className="col-md-6 form-col-left">
                        <input
                          className="form-input"
                          placeholder="Phone Number"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          type="text"
                        />
                      </div>
                      <div className="col-md-6 form-col-right">
                        <input
                          className="form-input"
                          placeholder="Email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          type="email"
                        />
                      </div>
                    </div>
                    <input
                      className="form-input"
                      placeholder="Website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      required
                      type="text"
                    />
                    <textarea
                      className="form-textarea"
                      placeholder="Text Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                    <div className="recaptcha-wrapper">
                      <div>
                        <p className="recaptcha-error">ERROR for site owner:</p>
                        <p className="recaptcha-error">
                          Invalid domain for site key
                        </p>
                      </div>
                      <div className="recaptcha-box">
                        <div className="recaptcha-inner">
                          <div className="recaptcha-checkbox">
                            <div className="recaptcha-checkmark"></div>
                          </div>
                          <span className="recaptcha-label">reCAPTCHA</span>
                        </div>
                        <p className="recaptcha-terms">Privacy - Terms</p>
                      </div>
                    </div>
                    <div className="form-button-container">
                      <button
                        className="submit-button"
                        type="submit"
                        disabled={loading}
                      >
                        {loading ? "SUBMITTING..." : "SEND MESSAGE"}
                      </button>
                    </div>
                  </form>
                  {notificationMessage && (
                    <div className="notification-message">
                      {notificationMessage}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Map /> */}
        <Footer />
      </div>
    </div>
  );
}

export default ContactUs;
