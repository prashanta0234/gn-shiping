import React from "react";
import "./Process.css";

import icon1 from "../../../images/icon/1.png";
import icon2 from "../../../images/icon/2.png";
import icon3 from "../../../images/icon/3.png";
import icon4 from "../../../images/icon/4.png";
import { Col, Container, Row } from "react-bootstrap";

const Process = () => {
  return (
    <div className="process">
      <Container>
        <div className="process-header">
          <h1>Our Working Process</h1>
        </div>
        {/* <div >
          
        </div> */}
        <Row className="steps">
          <Col sm={6} md={3}>
            <div>
              <img src={icon1} alt="" />
              <h6>Booking</h6>
            </div>
          </Col>
          <Col sm={6} md={3}>
            <div>
              <img src={icon2} alt="" />
              <h6>Packing</h6>
            </div>
          </Col>
          <Col sm={6} md={3}>
            <div>
              <img src={icon3} alt="" />
              <h6>Transportation</h6>
            </div>
          </Col>

          <Col sm={6} md={3}>
            <div>
              <img src={icon4} alt="" />
              <h6>Delivery</h6>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Process;
