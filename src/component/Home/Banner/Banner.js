import React from "react";
import "./Banner.css";

import svg from "../../../images/svg.png";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner">
      <Container>
        <Row>
          <Col sm={5} md={5}>
            <div className="banner-text">
              <h4>Welcome to</h4>
              <h1 className="color">GN Shiping Companey </h1>
              <h5>
                Global turnkey logistics and transportation services via sea,
                land and air. We will protect you from risk and liability.
              </h5>
              <Link to="/contact">
                <button> Contact Us</button>
              </Link>
            </div>
          </Col>
          <Col sm={7} md={7} className="banner-img">
            <img src={svg} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
