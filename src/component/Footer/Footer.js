import React from "react";
import { Col, Container, FormControl, InputGroup, Row } from "react-bootstrap";
import "./Footer.css";

import logo from "../../logo/Logo.png";
import Button from "@restart/ui/esm/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faEnvelope,
  faPaperPlane,
  faPhone,
  faSearchLocation,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  const style = {
    color: "#FFFFFF",
  };
  const style1 = {
    color: "#86a7a7",
  };
  const send = <FontAwesomeIcon icon={faPaperPlane} style={style} />;
  const Location = <FontAwesomeIcon icon={faSearchLocation} style={style1} />;
  const mail = <FontAwesomeIcon icon={faEnvelope} style={style1} />;
  const phone = <FontAwesomeIcon icon={faPhone} style={style1} />;
  const clock = <FontAwesomeIcon icon={faClock} style={style1} />;
  return (
    <div>
      <div className="footer-main">
        <Container>
          <Row>
            <Col md={4} sm={12} className="g-4">
              <img src={logo} alt="" width="70%" />
              <p>
                Everyday is a new day for us and we work really hard to satisfy
                our customer everywhere.
              </p>
              <InputGroup className="mailUs">
                <FormControl
                  placeholder="Enter Your Mail"
                  aria-label="Enter Your Mail"
                  aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                  {send}
                </Button>
              </InputGroup>
            </Col>
            <Col md={4} sm={12} className="g-4">
              <div className="useFul">
                <h4>Usefull Link</h4>
                {/* <div id="arrow"></div> */}
                <ul>
                  <li>
                    {" "}
                    <Link to="/services">Services</Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link to="/shiping">Shiping</Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link to="/tracking">Tracking</Link>{" "}
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={4} sm={12} className="g-4">
              <h4>Get In Touch</h4>
              <div className="touch">
                <h6> {Location} &nbsp; Chandpur,Dhaka,BD</h6>
                <h6> {mail} &nbsp; prashanta0234@gmail.com</h6>
                <h6> {phone} &nbsp; 01754540234</h6>
                <h6> {clock} &nbsp; 10am-8pm</h6>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer">
        <h6>
          <span>&copy;</span> GN Shiping 2021
        </h6>
      </div>
    </div>
  );
};

export default Footer;
<h1>yep is</h1>;
