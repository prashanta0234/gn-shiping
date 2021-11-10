import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Shiping.css";
// import useAuth from "../hooks/useAuth";

const Shiping = () => {
  const [shipings, setshipings] = useState([]);
  useEffect(() => {
    fetch("https://obscure-peak-30332.herokuapp.com/shiping")
      .then((res) => res.json())
      .then((data) => setshipings(data));
  }, []);
  console.log(shipings);

  //   delate
  const handleDelate = (id) => {
    const procced = window.confirm("Are You Sure You delate this Item?");
    if (procced) {
      const url = `https://obscure-peak-30332.herokuapp.com/shiping/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Delated!");
            const remainingShiping = shipings.filter(
              (shiping) => shiping._id !== id
            );
            setshipings(remainingShiping);
          }
        });
    }
  };
  return (
    <div>
      <div className="shiping-header">
        <h2>Shiping List</h2>
      </div>

      <Container>
        <Row xs={1} md={1} className="g-4">
          {shipings.map((shiping) => (
            <Col>
              <Card className="card">
                <Card.Body>
                  <p className="shiping-details">
                    <h6>
                      {" "}
                      Shiping: &nbsp; <span>{shiping.name}</span>
                    </h6>
                    <h6>
                      {" "}
                      Shiping Type: &nbsp;<span>{shiping.shipingName}</span>
                    </h6>
                    <h6>
                      Total Cost:&nbsp; <span>{shiping.total}</span>
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

export default Shiping;
