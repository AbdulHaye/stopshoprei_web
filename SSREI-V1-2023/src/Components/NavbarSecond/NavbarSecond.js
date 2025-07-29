import React from "react";
import logo from "./../../Assets/logorei.png";
import "./../NavbarSecond/NavbarSecond.css";
function NavbarSecond() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <a className="navbar-brand" href="">
            <img src={logo} className="header-custom-logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  id="navbarDropdown"
                  role="button"
                  v-pre
                  className="nav-link  dropdown-toggle"
                  aria-current="page"
                  href="#"
                >
                  HOME
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                    CRM SERVICES
                    <i className="fa-solid fa-angle-down mx-2"></i>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                    REI PODIO CRM
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    INTEGRACTIONS
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    REI LEADS MANAGEMENT SYSTEM
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    PODIO PROJECT <br /> MANAGEMENT - TRACKING
                    </a>
                  </li>
                  {/* <li>
                    <hr className="dropdown-divider" />
                  </li> */}
                  {/* <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li> */}
                </ul>
              </li>


            
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                      VA SERVICES
                    <i className="fa-solid fa-angle-down mx-2"></i>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                    DATA COLLECTION
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    MARKETING COMPAIGNS
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    PROCESS LEADS
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    NURTURE CAMPAIGN
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                    KPI TRACKER SHEET
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    MACROS
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    SMS DRIP CAMPAIGNS
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    TELEMARKETING
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    HUMAN RESOURCE
                    </a>
                  </li>
               
                </ul>
              </li>


              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                     REI WEBSITE TEMPLATE
                    <i className="fa-solid fa-angle-down mx-2"></i>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                    LISTING PROPERTIES
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    GET CASH OFFERES
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    INVESTMENT PROPERTIES
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    SELLING AND BUYING
                    </a>
                  </li>

                
               
                </ul>
              </li>
           
              {/* <li className="nav-item dropdown">
                <a
                  id="navbarDropdown"
                  className="nav-link dropdown-toggle"
                  href=""
                  role="button"
                  v-pre
                >
                  PRICING
                </a>
              </li>  */}


              <li className="nav-item">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  tabindex="-1"
                  
                >
                  PRICING
                </a>
              </li>
            </ul>
            {/* <form className="d-flex has-search">
            <span className="fa fa-search form-control-feedback "></span>
                  <input type="text" className=" nav-search-icon"/>
            </form> */}

            <li className="nav-item d-flex align-items-center justify-content-center">
                <div className="form-group has-search">
                  <span className="fa fa-search form-control-feedback "></span>
                  <input type="text" className=" nav-search-icon" />
                </div>
              </li>
          </div>
        </div>
      </nav>

    </>
  );
}

export default NavbarSecond;
