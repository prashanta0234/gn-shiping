import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Achivment.css";
import CountUp from "react-countup";

const Achivment = () => {
  return (
    <div className="achivment">
      <h2>Our Achievement</h2>
      <div className="main-achiv">
        <Container>
          <Row>
            <Col sm={6} md={3}>
              <div className="main-achiv-text">
                <h4>
                  <CountUp start={0} end={500} duration={5} />
                </h4>
                <h6>World Wide Branch</h6>
              </div>
            </Col>
            <Col sm={6} md={3}>
              <div className="main-achiv-text">
                <h4>
                  {" "}
                  <CountUp start={0} end={3742400} duration={5} />
                </h4>
                <h6>Total Clints</h6>
              </div>
            </Col>
            <Col sm={6} md={3}>
              <div className="main-achiv-text">
                <h4>
                  {" "}
                  <CountUp start={0} end={850500} duration={5} />
                </h4>
                <h6>Hours Of Support</h6>
              </div>
            </Col>

            <Col sm={6} md={3}>
              <div className="main-achiv-text">
                <h4>
                  <CountUp start={0} end={4000} duration={5} />
                </h4>
                <h6>Woned Vehicles</h6>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Achivment;
