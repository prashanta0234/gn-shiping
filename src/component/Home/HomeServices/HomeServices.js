import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./HomeServices.css";

const HomeServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://obscure-peak-30332.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  console.log(services);

  return (
    <div className="homeService">
      <Container>
        <div className="servicesHeader">
          <h2>Services</h2>
        </div>
        <Row xs={1} md={3} className="g-4">
          {services.map((service) => (
            <Col>
              <Card className="card">
                <Card.Img variant="top" src={service.img} />
                <Card.Body>
                  <Card.Title>{service.name.slice(0, 20)}</Card.Title>
                  <Card.Text>{service.description.slice(0, 120)}</Card.Text>
                  <Link to={`/book/${service._id}`}>
                    <button> Book </button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HomeServices;
