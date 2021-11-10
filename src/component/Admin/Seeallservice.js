import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Admin from "./Admin";
import "./Seeallservice.css";

const Seeallservice = () => {
  const [services, setservices] = useState([]);
  useEffect(() => {
    fetch("https://obscure-peak-30332.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setservices(data));
  }, []);

  const handleDelate = (id) => {
    const procced = window.confirm("Are You Sure You delate this Item?");
    if (procced) {
      const url = `https://obscure-peak-30332.herokuapp.com/services/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Delated!");
            const remainingShiping = services.filter(
              (shiping) => shiping._id !== id
            );
            setservices(remainingShiping);
          }
        });
    }
  };
  return (
    <div>
      <Admin></Admin>
      <div className="shiping-header">
        <h2>Shiping List</h2>
      </div>

      <Container>
        <Row xs={1} md={1} className="g-4">
          {services.map((shiping) => (
            <Col>
              <Card className="card">
                <Card.Body>
                  <p className="shiping-details">
                    <h6>
                      {" "}
                      Servise: &nbsp; <span>{shiping.name}</span>
                    </h6>
                    <h6 className="des">
                      {" "}
                      Description: &nbsp;<span>{shiping.description}</span>
                    </h6>
                    <h6>
                      Total Cost:&nbsp; <span>{shiping.price}</span>
                    </h6>
                    <h6>
                      <button onClick={() => handleDelate(shiping._id)}>
                        {" "}
                        Delate
                      </button>
                    </h6>
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Seeallservice;
