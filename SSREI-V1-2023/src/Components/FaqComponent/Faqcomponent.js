import React, { useState } from "react";
import "./../FaqComponent/FaqStyle.css";
import eye from "./../../Assets/eye.png";
import { Accordion, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import faq_image from "./../../Assets/faq_image.png";
function Faqcomponent() {
  const [activeIndex, setActiveIndex] = useState(-1); // State to keep track of the active panel index

  // Function to toggle the active panel
  const togglePanel = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };
  const accordionData = [
    {
      title: "Section 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Section 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Section 3",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Section 3",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Section 3",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Section 3",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Section 3",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];
  return (
    <div className="row container-fluid my-3">
      <h2 className="faqheading h">F.A.Q</h2>
      <div className="col-sm-8 faq_sections">
        <div className="accordion-container">
          {accordionData.map((data, index) => (
            <div key={index} className="mt-2">
              <button
                className={`accordion ${activeIndex === index ? "active" : ""}`}
                onClick={() => togglePanel(index)}
              >
                {data.title}
                <img className="eyestyle" src={eye} width="20px" />
              </button>

              <div
                className="panel"
                style={{
                  maxHeight: activeIndex === index ? "500px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.4s ease-out",
                }}
              >
                <p>{data.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="col-sm-4">
       
        <div className="">
        <img src={faq_image} className="faq_image"></img>
        </div>
      </div>
    </div>
  );
}

export default Faqcomponent;
