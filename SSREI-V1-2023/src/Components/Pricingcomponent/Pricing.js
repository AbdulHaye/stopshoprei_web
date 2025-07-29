import React from "react";
import "./../Pricingcomponent/Pricing.css";
import logo from "./../../Assets/logorei.png"
function Pricing() {
  return (
    <div className="background-images container-fluid">
         <h2 className="ourpackages ">OUR PACKAGES</h2>
      <hr className="hrtag1"></hr>
      <div class="price-card">
        <div class="card-heading featured" >BASIC</div>
        <ul class="card-details">
          <li>5 GB Storage</li>
          <li>10 Email Addresses</li>
          <li>24/7 Support</li>
        </ul>
        <button class="card-btn">CHOOSE THIS PACKAGE</button>
      </div>

    


      </div>
  
  );
}

export default Pricing;
