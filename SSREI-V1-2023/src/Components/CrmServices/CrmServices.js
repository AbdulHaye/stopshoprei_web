import React from "react";
import "./../CrmServices/CrmServices.css";
import salesforce from "./../../Assets/salesforce.png";
import podio from "./../../Assets/podiologo.png";
import rei from "./../../Assets/reireply.png";
import batchlead from "./../../Assets/batchlead.png";

function CrmServices() {
  return (
    <> 
      <p className="crm">CRM SERVICES</p>
      <div className="d-flex justify-content-center row maindiv1">
        <div className="col-sm-6 col-md-3 mt-1">
          <img src={podio} className="crm_pic" />
        </div>
        <div className="col-sm-6 col-md-3 mt-1">
          <img src={rei} className="crm_pic" />
        </div>
        <div className="col-sm-6 col-md-3 mt-1">
          <img src={salesforce} className="crm_pic"/>
        </div>
        <div className="col-sm-6 col-md-3 mt-1">
          <img src={batchlead} className="crm_pic" />
        </div>
      </div>
    </>
  );
}

export default CrmServices;
