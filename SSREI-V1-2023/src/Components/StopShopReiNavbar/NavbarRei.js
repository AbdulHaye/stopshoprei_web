import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "./../../Assets/logorei.png";
import "./../StopShopReiNavbar/NavbarRei.css"
function NavbarRei() {
  return (
  
    <Navbar collapseOnSelect expand="lg" bg="White" variant="light">
      <>
        <Navbar.Brand href="#home">     <img src={logo} className="header-custom-logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link href="#home"><a class="button">HOME</a></Nav.Link>
            <Nav.Link href="#crm-services"><a class="button">CRM SERVICES</a></Nav.Link>
            <Nav.Link href="#va-services"><a class="button">VA SERVICES</a></Nav.Link>
            <Nav.Link href="#website-template"><a class="button">REI WEBSITE TEMPLATES</a></Nav.Link>
            <Nav.Link href="#price"><a class="button">PRICING</a></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </>
    </Navbar>


  );
}

export default NavbarRei;
