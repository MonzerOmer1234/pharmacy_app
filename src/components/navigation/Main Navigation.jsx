// NavBarComponent.js

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaSearch } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { useState } from "react";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  const [showHeader, setShowHeader] = useState(true);

  function handleSearchClick() {
    setShowHeader(!showHeader);
  }
  function handleClose() {
    setShowHeader(true);
  }
  return (
    <>
      {!showHeader ? (
        <Navbar collapseOnSelect expand="lg">
          <Container className={classes.container}>
            <input
              type="search"
              placeholder="Search Keyword and hit enter ..."
              className={classes.search}
            />
            <span
              style={{ cursor: "pointer", fontSize: "30px" }}
              onClick={handleClose}
            >
              &times;
            </span>
          </Container>
        </Navbar>
      ) : (
        <div className="container">
          <nav className={classes.nav}>
            <Navbar collapseOnSelect expand="lg">
              <Container className={classes.container}>
                <Navbar.Brand href="/" className="text-black fw-bold ">
                  P H A R M A
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className={`${classes.list}`}>
                    <Nav.Link href="/" className=" text-uppercase ">
                      Home
                    </Nav.Link>
                    <Nav.Link href="/store" className=" text-uppercase ">
                      Store
                    </Nav.Link>
                    <Nav.Link href="/about" className=" text-uppercase ">
                      About
                    </Nav.Link>
                    <Nav.Link href="/contact" className=" text-uppercase ">
                      Contact
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            <Nav className={`${classes.nav2} me-0 mt-0 `}>
              <Nav.Link>
                <FaSearch onClick={handleSearchClick} />
              </Nav.Link>
              <CiShoppingCart />
            </Nav>
          </nav>
        </div>
      )}
    </>
  );
}

export default MainNavigation;
