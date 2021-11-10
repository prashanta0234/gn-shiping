import {
  faClock,
  faEnvelope,
  faPhone,
  faSignInAlt,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

import logo from "../../logo/Logo.png";
import useAuth from "../hooks/useAuth";
import Button from "@restart/ui/esm/Button";

const Header = () => {
  const style = { color: "#EB0028" };
  const mail = <FontAwesomeIcon icon={faEnvelope} style={style} />;
  const phone = <FontAwesomeIcon icon={faPhone} style={style} />;
  const clock = <FontAwesomeIcon icon={faClock} style={style} />;
  const admin = <FontAwesomeIcon icon={faUserCircle} style={style} />;
  const signIn = <FontAwesomeIcon icon={faSignInAlt} />;
  const { user, logOut } = useAuth();
  return (
    <div>
      {/* top header start */}
      <div className="top-header">
        <Container>
          <div className="top-header-main">
            <div>
              {mail} Prashanta0234@gmail.com &nbsp; &#124; &nbsp;
              {phone} 01754540234 &nbsp; &#124; &nbsp;
              {clock} 10am-8pm
            </div>
            <div>
              <Link to="/login">
                {!user?.email ? (
                  <Button>{signIn}&nbsp; Login</Button>
                ) : (
                  <div>
                    <button onClick={logOut}> Logout</button>
                    <Link to="/shiping">
                      <button> My Order</button>
                    </Link>
                    <Link to="/admin">
                      <button> {admin}</button>
                    </Link>
                  </div>
                )}
              </Link>
            </div>
          </div>
        </Container>
      </div>
      {/* top header finish */}

      {/* nav bar start */}
      <Navbar expand="lg" sticky="top">
        <Container>
          <Navbar.Brand>
            <Link to="/home">
              <img
                src={logo}
                width="200"
                height="50"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end nav">
            <Nav>
              <NavLink to="/home" activeClassName="active">
                Home
              </NavLink>
              <NavLink to="/services" activeClassName="active">
                Services
              </NavLink>
              <NavLink to="/shiping" activeClassName="active">
                Shiping
              </NavLink>
              <NavLink to="/tracking" activeClassName="active">
                Tracking
              </NavLink>
              <NavLink to="/contact" activeClassName="active">
                Contact Us
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
<h1>yep iam header</h1>;
