import React from "react";
import "./../VaServices/VaServices.css";
import elipse from "./../../Assets/Ellipse.png";
import va from "./../../Assets/va.png";
import greenarrow from "./../../Assets/greenarrow.png";
import elipseforgreen from "./../../Assets/roundforgreen.png";
import coldhead from "./../../Assets/coldcallhead.png";
import cold from "./../../Assets/cold.png";
import textmarketing from "./../../Assets/textmarketing.png";
import roundmail from "./../../Assets/ic_round-mail.png";
import postcard from "./../../Assets/postcard.png";
import apostcard from "./../../Assets/apostcard.png";
import humanresource from "./../../Assets/humanresource.png"
import ab from "./../../Assets/ab.png";
import pen from "./../../Assets/pen.png";
import roundmailsigma from "./../../Assets/rounmailsigma.png";
import sigma from "./../../Assets/sigma.png";
import frame from "./../../Assets/frame.png"
import aframe from "./../../Assets/aframe.png"
import fb from "./../../Assets/fb.png"
import insta from "./../../Assets/insta.png"
import twitter from "./../../Assets/twitter.png"
import amico from "./../../Assets/amico.png"
import alpha from "./../../Assets/alpha.png"
import hrback from "./../../Assets/hrback.png"
import backtm from "./../../Assets/backtm.png"
function VaServices() {
  return (
    <div className="mx-5">
      <p className="vaservice mt-5">VA SERVICES</p>
      <div className="maindiv row">
        <div className="col-md-3 ">
        <img src={amico} className="elipsesetting" />
          {/* <img src={elipse} className="elipsesetting" />
          <img src={va} className="elipsesetting1" /> */}
        </div>
 
        <div className="col-md-9 row">
          <div className="flip-card3"></div>

          <div className="flip-card3">
            <div className="flip-card-inner3">
              <div className="flip-card-front3">
                <>
                  <img className="coldhead" src={coldhead} />
                  <img className="coldpic" src={cold} />
                </>
                <>
                  <p className="cold">Cold Calling</p>
                </>
              </div>
              <div className="flip-card-back3">
                <p className="detail">More Detail</p>
                <img className="elipseforgreen" src={elipseforgreen} />
                <img className="greenarrow" src={greenarrow} />
              </div>
            </div>
          </div>

          <div className="flip-card3">
            <div className="flip-card-inner3">
              <div className="flip-card-front3">
                <>
                  <img className="tm" src={textmarketing} />
                
                  <img className="backtm" src={backtm} />
                </>
                <>
                  <p className="cold">Text Marketing</p>
                </>
              </div>
              <div className="flip-card-back3">
                <p className="detail">More Detail</p>
                <img className="elipseforgreen" src={elipseforgreen} />
                <img className="greenarrow" src={greenarrow} />
              </div>
            </div>
          </div>

          <div className="flip-card3">
            <div className="flip-card-inner3">
              <div className="flip-card-front3">
              <>
                  <img className="roundsigma" src={roundmailsigma} />
                  <img className="sigma" src={sigma} />
                </>
                <>
                <p className="cold">Ringless Voice Mails</p>
                </>
              </div>
              <div className="flip-card-back3">
                <p className="detail">More Detail</p>
                <img className="elipseforgreen" src={elipseforgreen} />
                <img className="greenarrow" src={greenarrow} />
              </div>
            </div>
          </div>

          <div className="flip-card3">
            <div className="flip-card-inner3">
              <div className="flip-card-front3">
              <>
              <img className="roundsigma" src={roundmailsigma} />
                  <img className="alpha" src={alpha} />
                </>
                <>
                <p className="cold"> Email Marketing</p>
                </>
              </div>
              <div className="flip-card-back3">
                <p className="detail">More Detail</p>
                <img className="elipseforgreen" src={elipseforgreen} />
                <img className="greenarrow" src={greenarrow} />
              </div>
            </div>
          </div>

          <div className="flip-card3">
            <div className="flip-card-inner3">
              <div className="flip-card-front3">
              <>
                  <img className="coldhead" src={postcard} />
                  <img className="psa" src={apostcard} />
                </>
                <>
                <p className="cold"> Post Card Campigns</p>
                </> </div>
              <div className="flip-card-back3">
                <p className="detail">More Detail</p>
                <img className="elipseforgreen" src={elipseforgreen} />
                <img className="greenarrow" src={greenarrow} />
              </div>
            </div>
          </div>

          <div className="flip-card3">
            <div className="flip-card-inner3">
              <div className="flip-card-front3">
              <>
                  <img className="fb" src={fb} />
                  <img className="insta" src={insta} />
                  <img className="twitter" src={twitter} />
                </>
                <>
                <p className="cold">Social Media Marketing</p>
                </>
           
              </div>
              <div className="flip-card-back3">
                <p className="detail">More Detail</p>
                <img className="elipseforgreen" src={elipseforgreen} />
                <img className="greenarrow" src={greenarrow} />
              </div>
            </div>
          </div>

          <div className="flip-card3">
            <div className="flip-card-inner3">
              <div className="flip-card-front3">
              <>
                  <img className="pen" src={pen} />
                  <img className="ab" src={ab} />
                </>
                <>
                <p className="cold">Blog and Content Writing </p>
                </>
             
              </div>
              <div className="flip-card-back3">
                <p className="detail">More Detail</p>
                <img className="elipseforgreen" src={elipseforgreen} />
                <img className="greenarrow" src={greenarrow} />
              </div>
            </div>
          </div>

          <div className="flip-card3">
            <div className="flip-card-inner3">
              <div className="flip-card-front3">
              <>
  
                  <img className="human" src={humanresource} />
                  <img className="backhuman" src={hrback} />
                </>
                <>
                <p className="cold"> Human Resource Solution </p>
                </>
    
              </div>
              <div className="flip-card-back3">
                <p className="detail">More Detail</p>
                <img className="elipseforgreen" src={elipseforgreen} />
                <img className="greenarrow" src={greenarrow} />
              </div>
            </div>
          </div>

          <div className="flip-card3">
            <div className="flip-card-inner3">
              <div className="flip-card-front3">
              <>
                  <img className="frame" src={frame} />
                  <img className="wga" src={aframe} />
                </>
                <>
                <p className="cold">Web & Graphic Designing </p>
                </>
         
              </div>
              <div className="flip-card-back3">
                <p className="detail">More Detail</p>
                <img className="elipseforgreen" src={elipseforgreen} />
                <img className="greenarrow" src={greenarrow} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VaServices;
