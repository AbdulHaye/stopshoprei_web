import React from "react";

import arrowRight from "./../../Assets/rightsidearrow.png";
import arrowLeft from "./../../Assets/leftsidearrow.png";
import Slider from "react-slick";
import "./../TemplateSlider/TemplateSlider.css";
import slidebg from "./../../Assets/sliderbg.png";
import temp1 from "./../../Assets/Template1.png";
import temp2 from "./../../Assets/Template2.png";
import temp3 from "./../../Assets/Template3.png";
import temp4 from "./../../Assets/Template4.png";
import temp5 from "./../../Assets/Template5.png";
import top from "./../../Assets/templetetop1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function TemplateSlider() {
  const settings = {
    dots: false,
    autoplay: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    // arrows: true,
    nextArrow: <img className="brands_arrow" src={arrowRight} />,
    prevArrow: <img className="brands_arrow" src={arrowLeft} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          // dots: true
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };
 
  return (
    <>
      <img className="reitoptemp mt-5" src={top} width="100%" height="200px" />
      <div className="topmaindiv">
        <h5 className="reiheading">REI WEB TEMPLATES</h5>
        <p className="reiparagraph">
          Struggling to find the perfect website template for your REI-based
          investments? Look no further. Check out some of the trending website
          templates that we have in store for you. Each of these can be
          tailor-made and customized as per your needs.
        </p>
      </div>
      <div class="flex-container templetebuttondiv ">
        <button className=" buttonrei">NEW WEBSITE</button>
        <button className=" buttonrei">WEB REPAIR SOLUTION</button>
        <button className=" buttonrei">WEB TRANSFORM SOLUTION</button>{" "}
        <button className=" buttonrei">WEB S.E.O</button>{" "}
      </div>
      <div className="main_div1 mt-5">
        <Slider {...settings}>
          <>
            {/* <div className="brand_section_top1">
                    <img src={temp1} className="brands_image1" alt="" />
                  </div> */}
            <div class="flip-card1">
              <div class="flip-card-inner1">
                <div class="flip-card-front1">
                  <img src={temp1} className="brands_image1" alt="" />
                </div>
                <div class="flip-card-back1">
                  <i class="fas fa-search-plus iconsetting"></i>
                  <p className="viewdesign">VIEW DEISGN</p>

                  <button class="button2">BUY</button>
                </div>
              </div>
            </div>
          </>
          <>
            {/* <div className="brand_section_top1">
                    <img src={temp1} className="brands_image1" alt="" />
                  </div> */}
            <div class="flip-card1">
              <div class="flip-card-inner1">
                <div class="flip-card-front1">
                  <img src={temp1} className="brands_image1" alt="" />
                </div>
                <div class="flip-card-back1">
                  <i class="fas fa-search-plus iconsetting"></i>
                  <p className="viewdesign">VIEW DEISGN</p>

                  <button class="button2">BUY</button>
                </div>
              </div>
            </div>
          </>
          <>
            {/* <div className="brand_section_top1">
              <img src={temp2} className="brands_image1" alt="" />
            </div> */}

            <div class="flip-card1">
              <div class="flip-card-inner1">
                <div class="flip-card-front1">
                  <img src={temp2} className="brands_image1" alt="" />
                </div>
                <div class="flip-card-back1">
                  <i class="fas fa-search-plus iconsetting"></i>
                  <p className="viewdesign">VIEW DEISGN</p>

                  <button class="button2">BUY</button>
                </div>
              </div>
            </div>
          </>

          <>
            {/* <div className="brand_section_top1">
              <img src={temp3} className="brands_image1" alt="" />
            </div> */}
            <div class="flip-card1">
              <div class="flip-card-inner1">
                <div class="flip-card-front1">
                  <img src={temp3} className="brands_image1" alt="" />
                </div>
                <div class="flip-card-back1">
                  <i class="fas fa-search-plus iconsetting"></i>
                  <p className="viewdesign">VIEW DEISGN</p>

                  <button class="button2">BUY</button>
                </div>
              </div>
            </div>
          </>

          <>
            {/* <div className="brand_section_top1">
              <img src={temp4} className="brands_image1" alt="" />
            </div> */}

            <div class="flip-card1">
              <div class="flip-card-inner1">
                <div class="flip-card-front1">
                  <img src={temp4} className="brands_image1" alt="" />
                </div>
                <div class="flip-card-back1">
                  <i class="fas fa-search-plus iconsetting"></i>
                  <p className="viewdesign">VIEW DEISGN</p>

                  <button class="button2">BUY</button>
                </div>
              </div>
            </div>
          </>

          <>
            {/* <div className="brand_section_top1">
              <img src={temp5} className="brands_image1" alt="" />
            </div> */}

            <div class="flip-card1">
              <div class="flip-card-inner1">
                <div class="flip-card-front1">
                  <img src={temp5} className="brands_image1" alt="" />
                </div>
                <div class="flip-card-back1">
                  <i class="fas fa-search-plus iconsetting"></i>
                  <p className="viewdesign">VIEW DEISGN</p>

                  <button class="button2">BUY</button>
                </div>
              </div>
            </div>
            
          </>
        </Slider>

        {/* <button class="round-btn mt-2">View More Template</button> */}
      </div>

      <div className="bottomrei mt-5"></div>
    </>
  );
}

export default TemplateSlider;
