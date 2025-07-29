import React, { useState, useRef } from "react";
import "../../Components/LeadConversionProcess/LeadCP.css";
import checkout from "../../Assets/checkout.png";
import hoverImage from "../../Assets/hover_img.png";
import deleteImage from "../../Assets/delete.png";
import notification from "../../Assets/notification.png";
import filter from "../../Assets/filter.png";
import arrowup from "../../Assets/arrow_up.png";
import money_emoji from "../../Assets/emojione_money-with-wings.png";
import arrow_down_sm from "../../Assets/small_arrow_down.png";
import array_forward from "../../Assets/arrow_forward.png";
import arrow_downl from "../../Assets/arrow_down_l.png";
import curve_arrow from "../../Assets/curve_arrow.png";
import doted_arrow from "../../Assets/doted_arrow.png";
import two_sided_arrow from "../../Assets/two_sided_arrow.png";
import offer from "../../Assets/OFFER.png";
import safe from "../../Assets/safe.png";
import money from "../../Assets/money.png";
import arrow_back from "../../Assets/arrow_back.png";
import accepted from "../../Assets/accepted.png";
import skip_trac from "../../Assets/skip_trac.png";
import cart from "../../Assets/cart.png";
import list_data from "../../Assets/list_data.png";
import closing_arrow from "../../Assets/closing_arrow.png";
import social_icons from "../../Assets/social_icons.png";
const LeadCP = () => {
  const [image, setImage] = useState(checkout);
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  const [image1, setImage1] = useState(checkout);
  const [count1, setCount1] = useState(0);
  const countRef1 = useRef(null);

  const [image2, setImage2] = useState(checkout);
  const [count2, setCount2] = useState(0);
  const countRef2 = useRef(null);

  const [image3, setImage3] = useState(checkout);
  const [count3, setCount3] = useState(0);
  const countRef3 = useRef(null);

  const [image_hot, setImage_hot] = useState(checkout);
  const [count_hot, setCount_hot] = useState(0);
  const countRef_hot = useRef(null);

  const [image_drip, setImage_drip] = useState(checkout);
  const [count_drip, setCount_drip] = useState(0);
  const countRef_drip = useRef(null);

  const [image_fut, setImage_fut] = useState(checkout);
  const [count_fut, setCount_fut] = useState(0);
  const countRef_fut = useRef(null);

  const [image_mark, setImage_mark] = useState(checkout);
  const [count_mark, setCount_mark] = useState(0);
  const countRef_mark = useRef(null);

  const [image_foll, setImage_foll] = useState(checkout);
  const [count_foll, setCount_foll] = useState(0);
  const countRef_foll = useRef(null);

  const [image_acq, setImage_acq] = useState(checkout);
  const [count_acq, setCount_acq] = useState(0);
  const countRef_acq = useRef(null);

  const [image_disp, setImage_disp] = useState(checkout);
  const [count_disp, setCount_disp] = useState(0);
  const countRef_disp = useRef(null);

  const [image_web, setImage_web] = useState(checkout);
  const [count_web, setCount_web] = useState(0);
  const countRef_web = useRef(null);

  const [image_digt, setImage_digt] = useState(checkout);
  const [count_digt, setCount_digt] = useState(0);
  const countRef_digt = useRef(null);



  const handleClick = () => {
    if (image === checkout) {
      setImage(hoverImage);
      setCount(1);
    } else if (image === deleteImage) {
      setImage(checkout);
      setCount(count - 1);
    }
  };

  const handleHover = () => {
    if (image === hoverImage) {
      setImage(deleteImage);
    }
  };

  const handleMouseLeave = () => {
    if (image === deleteImage) {
      setImage(hoverImage);
    }
  };

  const handleClick1 = () => {
    if (image1 === checkout) {
      setImage1(hoverImage);
      setCount1(1);
    } else if (image1 === deleteImage) {
      setImage1(checkout);
      setCount1(count1 - 1);
    }
  };

  const handleHover1 = () => {
    if (image1 === hoverImage) {
      setImage1(deleteImage);
    }
  };

  const handleMouseLeave1 = () => {
    if (image1 === deleteImage) {
      setImage1(hoverImage);
    }
  };

  const handleClick2 = () => {
    if (image2 === checkout) {
      setImage2(hoverImage);
      setCount2(1);
    } else if (image2 === deleteImage) {
      setImage2(checkout);
      setCount2(count2 - 1);
    }
  };

  const handleHover2 = () => {
    if (image2 === hoverImage) {
      setImage2(deleteImage);
    }
  };

  const handleMouseLeave2 = () => {
    if (image2 === deleteImage) {
      setImage2(hoverImage);
    }
  };

  const handleClick3 = () => {
    if (image3 === checkout) {
      setImage3(hoverImage);
      setCount3(1);
    } else if (image3 === deleteImage) {
      setImage3(checkout);
      setCount3(count3 - 1);
    }
  };

  const handleHover3 = () => {
    if (image3 === hoverImage) {
      setImage3(deleteImage);
    }
  };

  const handleMouseLeave3 = () => {
    if (image3 === deleteImage) {
      setImage3(hoverImage);
    }
  };

  const handleClick_hot = () => {
    if (image_hot === checkout) {
      setImage_hot(hoverImage);
      setCount_hot(1);
    } else if (image_hot === deleteImage) {
      setImage_hot(checkout);
      setCount_hot(count_hot - 1);
    }
  };

  const handleHover_hot = () => {
    if (image_hot === hoverImage) {
      setImage_hot(deleteImage);
    }
  };

  const handleMouseLeave_hot = () => {
    if (image_hot === deleteImage) {
      setImage_hot(hoverImage);
    }
  };

  const handleClick_drip = () => {
    if (image_drip === checkout) {
      setImage_drip(hoverImage);
      setCount_drip(1);
    } else if (image_drip === deleteImage) {
      setImage_drip(checkout);
      setCount_drip(count_drip - 1);
    }
  };

  const handleHover_drip = () => {
    if (image_drip === hoverImage) {
      setImage_drip(deleteImage);
    }
  };

  const handleMouseLeave_drip = () => {
    if (image_drip === deleteImage) {
      setImage_drip(hoverImage);
    }
  };

  const handleClick_fut = () => {
    if (image_fut === checkout) {
      setImage_fut(hoverImage);
      setCount_fut(1);
    } else if (image_fut === deleteImage) {
      setImage_fut(checkout);
      setCount_fut(count_fut - 1);
    }
  };

  const handleHover_fut = () => {
    if (image_fut === hoverImage) {
      setImage_fut(deleteImage);
    }
  };

  const handleMouseLeave_fut = () => {
    if (image_fut === deleteImage) {
      setImage_fut(hoverImage);
    }
  };

  const handleClick_mark = () => {
    if (image_mark === checkout) {
      setImage_mark(hoverImage);
      setCount_mark(1);
    } else if (image_mark === deleteImage) {
      setImage_mark(checkout);
      setCount_mark(count_mark - 1);
    }
  };

  const handleHover_mark = () => {
    if (image_mark === hoverImage) {
      setImage_mark(deleteImage);
    }
  };

  const handleMouseLeave_mark = () => {
    if (image_mark === deleteImage) {
      setImage_mark(hoverImage);
    }
  };

  const handleClick_foll = () => {
    if (image_foll === checkout) {
      setImage_foll(hoverImage);
      setCount_foll(1);
    } else if (image_foll === deleteImage) {
      setImage_foll(checkout);
      setCount_foll(count_foll - 1);
    }
  };

  const handleHover_foll = () => {
    if (image_foll === hoverImage) {
      setImage_foll(deleteImage);
    }
  };

  const handleMouseLeave_foll = () => {
    if (image_foll === deleteImage) {
      setImage_foll(hoverImage);
    }
  };

  const handleClick_acq = () => {
    if (image_acq === checkout) {
      setImage_acq(hoverImage);
      setCount_acq(1);
    } else if (image_acq === deleteImage) {
      setImage_acq(checkout);
      setCount_acq(count_acq - 1);
    }
  };

  const handleHover_acq = () => {
    if (image_acq === hoverImage) {
      setImage_acq(deleteImage);
    }
  };

  const handleMouseLeave_acq = () => {
    if (image_acq === deleteImage) {
      setImage_acq(hoverImage);
    }
  };

  const handleClick_disp = () => {
    if (image_disp === checkout) {
      setImage_disp(hoverImage);
      setCount_disp(1);
    } else if (image_disp === deleteImage) {
      setImage_disp(checkout);
      setCount_disp(count_disp - 1);
    }
  };

  const handleHover_disp = () => {
    if (image_disp === hoverImage) {
      setImage_disp(deleteImage);
    }
  };

  const handleMouseLeave_disp = () => {
    if (image_disp === deleteImage) {
      setImage_disp(hoverImage);
    }
  };

  const handleClick_web = () => {
    if (image_web === checkout) {
      setImage_web(hoverImage);
      setCount_web(1);
    } else if (image_web === deleteImage) {
      setImage_web(checkout);
      setCount_web(count_web - 1);
    }
  };

  const handleHover_web = () => {
    if (image_web === hoverImage) {
      setImage_web(deleteImage);
    }
  };

  const handleMouseLeave_web = () => {
    if (image_web === deleteImage) {
      setImage_web(hoverImage);
    }
  };


  const handleClick_digt = () => {
    if (image_digt === checkout) {
      setImage_digt(hoverImage);
      setCount_digt(1);
    } else if (image_digt === deleteImage) {
      setImage_digt(checkout);
      setCount_digt(count_digt - 1);
    }
  };

  const handleHover_digt = () => {
    if (image_digt === hoverImage) {
      setImage_digt(deleteImage);
    }
  };

  const handleMouseLeave_digt = () => {
    if (image_digt === deleteImage) {
      setImage_digt(hoverImage);
    }
  };




  const calculatetotalCount1 = () => {
    const list_building = count;
    const list_stacking = count1;
    const skip_tracing = count2;
    const marketing = count3;

    const hot_lead = count_hot;
    const drip_camp = count_drip;
    const fut_follow = count_fut;

    const follow_mang = count_foll;
    const acq_mang = count_acq;
    const disp = count_disp;
    const mark = count_mark;
    const web = count_web;
    const digt_markt = count_digt;

    return (
      list_building +
      list_stacking +
      skip_tracing +
      marketing +
      hot_lead +
      drip_camp +
      fut_follow +
      follow_mang +
      acq_mang +
      disp +
      mark +
      web +
      digt_markt
    );
  };

  const totalCount1 = calculatetotalCount1();
  return (
    <React.Fragment>
      <div className="main_lead">
      
        <div className="scroll">
          <div className="">
            <img className="cart_img" src={cart} alt="Cart" />
            <span className="state_data">{totalCount1}</span>
            <div className="cart_data">GO TO CART</div>
          </div>
        </div>
        <div class="row main_leadCP">
          <div className="col-lg-2 col-md-2"></div>
          <div class="col-lg-4 col-md-4 main_head">
            <p class="main_one">LEAD CONVERSION PROCESS</p>
          </div>
          <div class="col-lg-4 col-md-4 image_container">
            <img className="img_noti" src={notification} alt="Notification" />
          </div>
        </div>
<div>
        <div className="row main_leadCP_one">
          <div className="col-lg-2 col-md-2">
            <div className="arrow1_div">
              
            </div>
          </div>
          <div className="col-lg-4 col-md-4 leadCP_2">
            <div className="list_div">
              <div className="col-12">
                <div className="row">
                  <div className="col-10 list_data">
                    <p>List Building</p>
                  </div>
                  <div className="col-2">
                    <img
                    className="checkoutt"
                      src={image}
                      onClick={handleClick}
                      onMouseOver={handleHover}
                      onMouseLeave={handleMouseLeave}
                      alt="Image"
                    />
                    {count > 0 && (
                      <span ref={countRef} className="count"></span>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="row">
                  <div className="col-10 list_data1">
                    <p>List Stacking/ Management </p>
                  </div>
                  <div className="col-2">
                    <img
                    className="checkoutt"
                      src={image1}
                      onClick={handleClick1}
                      onMouseOver={handleHover1}
                      onMouseLeave={handleMouseLeave1}
                      alt="Image"
                    />
                    {count1 > 0 && (
                      <span ref={countRef1} className="count1"></span>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="row">
                  <div className="col-10 list_data2">
                    <p>Skip Tracing</p>
                  </div>
                  <div className="col-2">
                    <img
                    className="checkoutt"
                      src={image2}
                      onClick={handleClick2}
                      onMouseOver={handleHover2}
                      onMouseLeave={handleMouseLeave2}
                      alt="Image"
                    />
                    {count2 > 0 && (
                      <span ref={countRef} className="count2"></span>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="row">
                  <div className="col-10 list_data3">
                    <p>Marketing</p>
                  </div>
                  <div className="col-2">
                    <img
                    className="checkoutt"
                      src={image3}
                      onClick={handleClick3}
                      onMouseOver={handleHover3}
                      onMouseLeave={handleMouseLeave3}
                      alt="Image3"
                    />
                    {count3 > 0 && (
                      <span ref={countRef} className="count3"></span>
                    )}
                  </div>
                </div>
              </div>

              {/* Repeat the same structure for other list items */}
            </div>
          </div>

          <div class="col-lg-4 col-md-4 leadCP_3">
            <div className="second_div1 row">
              <div className="col-lg-10">
                <p className="second_divdata">Website Design & Development</p>
              </div>
              <div className="col-lg-2">
               
                <img
                className="filed_cart checkoutt"
                src={image_web}
                onClick={handleClick_web}
                onMouseOver={handleHover_web}
                onMouseLeave={handleMouseLeave_web}
                alt="Image"
              />
              {count_web > 0 && (
                <span ref={countRef_web} className="">
               
                </span>
              )}
              </div>
            </div>
            <div className="second_div2 row">
              <div className="col-lg-10">
                <p className="second_divdata1 ">Digital Marketing</p>
                <div className="col-lg-12">
                  <img className="social_icon" src={social_icons} />
                 
                </div>
              </div>
              <div className="col-lg-2">
               
                <img
                className="filed_cart checkoutt"
                src={image_digt}
                onClick={handleClick_digt}
                onMouseOver={handleHover_digt}
                onMouseLeave={handleMouseLeave_digt}
                alt="Image"
              />
              {count_digt > 0 && (
                <span ref={countRef_digt} className="count">
                
                </span>
              )}
              </div>
            </div>
          </div>
        </div>

        <div class="row main_leadCP_two">
          <div className="col-lg-4 col-md-4">
          <div className="arr_re">
          <img className="curve_invest" src={curve_arrow} />
            <p className="re_invest">Re Invest</p>
            </div>
            <img className="list_dataimg" src={list_data} />
          </div>
          <div class="col-lg-4 col-md-4 filter">
            <img className="filter_img" src={filter}></img>
          </div>
          <div class="col-lg-4 col-md-4"></div>
        </div>

        <div class="row main_leadCP_three">
          <div className="col-lg-4 col-md-4">
            <img className="arrowup" src={arrowup}></img>
            <p className="re_invest1">
              <img className="money_emoji" src={money_emoji}></img>
              <span className="re_invest_data">$ Revenue</span>
            </p>
          </div>
          <div class="col-lg-4 col-md-4 two_list">
            <div className="col-12">
              <div className="row">
                <div className="col-10 list_rev_data">
                  <p className="list_lead">HOT LEADS IN CRM</p>
                </div>

                <div className="col-2">
                  <img
                    className="che"
                    src={image_hot}
                    onClick={handleClick_hot}
                    onMouseOver={handleHover_hot}
                    onMouseLeave={handleMouseLeave_hot}
                    alt="Image"
                  />
                  {count_hot > 0 && (
                    <span ref={countRef_hot} className="count"></span>
                  )}
                </div>
              </div>
            </div>
            <img className="arrow_down" src={arrow_down_sm}></img>
            <img className="arrow_ford" src={array_forward}></img>

            <div className="col-12">
              <div className="row">
                <div className="col-10 list_rev_data">
                  <p className="list_lead">Drip Campaigns</p>
                </div>
                <div className="col-2">
                  <img
                  className="che"
                    src={image_drip}
                    onClick={handleClick_drip}
                    onMouseOver={handleHover_drip}
                    onMouseLeave={handleMouseLeave_drip}
                    alt="Image"
                  />
                  {count_drip > 0 && (
                    <span ref={countRef_drip} className="count"></span>
                  )}
                </div>
              </div>
            </div>
            <img className="arrow_down" src={arrow_down_sm}></img>
            <img className="arrow_ford" src={doted_arrow}></img>
            <div className="col-12">
              <div className="row">
                <div className="col-10 list_rev_data">
                  <p className="list_lead">Future Following</p>
                </div>
                <div className="col-2">
                  <img
                  className="che"
                    src={image_fut}
                    onClick={handleClick_fut}
                    onMouseOver={handleHover_fut}
                    onMouseLeave={handleMouseLeave_fut}
                    alt="Image"
                  />
                  {count_fut > 0 && (
                    <span ref={countRef_fut} className="count"></span>
                  )}
                </div>
              </div>
            </div>
            <img className="arrow_down" src={arrow_down_sm}></img>
            <img className="arrow_ford" src={two_sided_arrow}></img>
            <div className="col-12">
              <div className="row main_dis">
                <div className="col-10 list_rev_data1">
                  <p className="list_lead1">Dead Trash / Junk</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 follow_last">
            <div className="col-8">
              <div className="row main_dis">
                <div className="col-10 Two_list_data2">
                  <p className="Two_list_msg">Followup Managers</p>
                </div>
                <div className="col-2">
                  <img
                  className="che1"
                    src={image_foll}
                    onClick={handleClick_foll}
                    onMouseOver={handleHover_foll}
                    onMouseLeave={handleMouseLeave_foll}
                    alt="Image"
                  />
                  {count_foll > 0 && (
                    <span ref={countRef_foll} className="count2"></span>
                  )}
                </div>
              </div>
            </div>
            <img className="arrow_down1" src={arrow_down_sm}></img>
            <img className="arrow_curve" src=""></img>
           

            <div className="col-8">
              <div className="row main_dis">
                <div className="col-10 Two_list_data2">
                  <p className="Two_list_msg">ACQ Manager</p>
                </div>
                <div className="col-2">
                  <img
                  className="che1"
                    src={image_acq}
                    onClick={handleClick_acq}
                    onMouseOver={handleHover_acq}
                    onMouseLeave={handleMouseLeave_acq}
                    alt="Image"
                  />
                  {count_acq > 0 && (
                    <span ref={countRef_acq} className="count2"></span>
                  )}
                </div>
              </div>
            </div>
            <img className="arrow_down2" src={arrow_down_sm}></img>

            <div className="col-8">
              <div className="row Und">
                <div className="col-10 Two_list_data2">
                  <p className="Two_list_msg">Under Contract</p>
                </div>
              </div>
            </div>
            <img className="arrow_down3" src={arrow_downl}></img>
            
            <img className="offer" src={offer}></img>

            <div className="col-8">
              <div className="row main_dis">
                <div className="col-10 Two_list_data2a">
                  <p className="Two_list_msga">Disposition</p>
                </div>
                <div className="col-2">
                  <img
                  className="che1"
                    src={image_disp}
                    onClick={handleClick_disp}
                    onMouseOver={handleHover_disp}
                    onMouseLeave={handleMouseLeave_disp}
                    alt="Image"
                  />
                  {count_disp > 0 && (
                    <span ref={countRef_disp} className="count2"></span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row main_leadCP_four">
          <div className="col-lg-4 col-md-4">
            <img className="closing arrow" src={closing_arrow}></img>

            <p className="re_invest1_esc">
              <img className="safe_emoji" src={safe}></img>
              <span className="re_invest_data_esc">Escrow</span>
            </p>
          </div>
          <div class="col-lg-4 col-md-4 two_list"></div>

          <div class="col-lg-4 col-md-4 follow_last">
          <div class="col-lg-4 col-md-4">
          <img className="skip_trac" src={skip_trac} />
        </div></div>
        </div>

        <div class="row main_leadCP">
          <div className="col-lg-4 col-md-4">
            <p className="re_invest1_escarr">
            
            </p>
          </div>
          <div class="col-lg-4 col-md-4 "></div>

          <div class="col-lg-4 col-md-4">
           
          </div>
        </div>

        <div class="row main_leadCP_six">
        
          <div className="col-lg-4 col-md-4">
         
            <p className="re_invest1_escm">
            <img className="arrow_trans" src={arrowup}></img>
              <img className="money_emoji" src={money}></img>
              
              <span className="re_invest_data_escm">Transection</span>
            </p>
          </div>
          <div class="col-lg-4 col-md-4 second_last">
            <img className="accepted" src={accepted}></img>

            <p className="re_invest1_escb">
              <span className="re_invest_data_escmb">Buyer’s Offer</span>
            </p>
          </div>

          <div class="col-lg-4 col-md-4">
            <img className="arrow_back2" src={arrow_back}></img>
            <div className="col-12 ">
              <div className="row mark">
                <div className="col-10 list_rev_datam">
                  <p className="list_leadm">Marketing</p>
                </div>

                <div className="col-2">
                  <img
                    className="che"
                    src={image_mark}
                    onClick={handleClick_mark}
                    onMouseOver={handleHover_mark}
                    onMouseLeave={handleMouseLeave_mark}
                    alt="Image"
                  />
                  {count_mark > 0 && (
                    <span ref={countRef_mark} className="count"></span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row main_leadCP">
          <div className="col-lg-4 col-md-4"></div>
          <div class="col-lg-4 col-md-4 "></div>

          <div class="col-lg-4 col-md-4">
            <img className="list_data_2" src={list_data}></img>
          </div>
        </div>
      </div>
      </div>
    </React.Fragment>
  );
};

export default LeadCP;
