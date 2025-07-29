import React from "react";
import "./../EngineeringYourSale/style.css";
import frame1 from "./../../Assets/Frame1.png";
import frame2 from "./../../Assets/Frame2.png";
import frame3 from "./../../Assets/Frame3.png";
import frame4 from "./../../Assets/Rectangle4.png";
function EngineeringYourSale() {
  return (
    <div className="container-fluid row ">
      <div className="col-sm-3">
        <img className="frame1" src={frame1} width="100%"></img>
      </div>
      <div className="col-sm-3">
        <img className="frame2" src={frame2}></img>
      </div>
      <div className="col-sm-3">
        <img className="frame3" src={frame3} width="100%"></img>
      </div>
      <div className="col-sm-3">
        <img className="frame4" src={frame4}></img>
      </div>
    </div>
  );
}

export default EngineeringYourSale;
