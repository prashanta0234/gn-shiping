import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import image from "../../../images/4702120.jpg";
import "./Why.css";

const Why = () => {
  return (
    <div>
      <Container>
        <div className="why-header">
          <h2>Why you Choose Us</h2>
        </div>
        <Row>
          <Col sm={12} md={6}>
            <img src={image} alt="" width="100%" />
          </Col>
          <Col sm={12} md={6}>
            <Accordion className="accroding">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Fastest Delivery</Accordion.Header>
                <Accordion.Body>
                  We deliverd your product within 7 days in world wide. We have
                  500 branch in world wide.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Safe and secure</Accordion.Header>
                <Accordion.Body>
                  We shipped your productt safe and securely. We are trasted
                  companey. you can shipped anything on our companey
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Cash on Delivery</Accordion.Header>
                <Accordion.Body>
                  We offerd cash on delivery. You can pay deliverry charge afer
                  recive product.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Why;
