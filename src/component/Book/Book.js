import React from "react";

import { useEffect } from "react";
import { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./Book.css";

const Book = () => {
  const { _id } = useParams();

  const [detailsService, setDetailsService] = useState([]);
  const [shipings, setShipings] = useState([]);
  const [show, setShow] = useState({});
  const [total, setTotal] = useState(0);
  const [name, setName] = useState("");
  const [shipingName, setShipingName] = useState("");
  const axios = require("axios").default;

  useEffect(() => {
    fetch("https://obscure-peak-30332.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setDetailsService(data));
  }, []);

  useEffect(() => {
    const findServices = detailsService.find(
      (services) => services._id === _id
    );
    console.log(findServices);
    setShow(findServices);
  }, [detailsService]);
  //   console.log(show);
  // const shipings = show?.shiping;
  useEffect(() => {
    fetch("https://obscure-peak-30332.herokuapp.com/shipingType")
      .then((data) => data.json())
      .then((res) => setShipings(res));
  }, []);
  console.log(shipings);
  const add = (p, n) => {
    const shipingCost = parseInt(p);

    const total = shipingCost + parseInt(show?.price);

    setTotal(total);
    setName(show?.name);
    setShipingName(n);
  };
  const postshiped = () => {
    axios
      .post("https://obscure-peak-30332.herokuapp.com/shiping", {
        name,
        total,
        shipingName,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  // console.log(total, name, shipingName);
  return (
    <div className="shiping-process">
      <Container>
        <h1>Process to Shiping</h1>
        <form>
          <input type="text" value={show?.name} />
          <input type="text" value={show?.price} />
        </form>

        <div className="shipingItem">
          <Row xs={1} md={3} className="g-4">
            {shipings?.map((shiping) => (
              <Col>
                <Card className="card m-5">
                  <Card.Body>
                    <Card.Title>{shiping?.name.slice(0, 20)}</Card.Title>
                    <Card.Text>{shiping?.description.slice(0, 120)}</Card.Text>
                    <Card.Text> Price: {shiping?.price}</Card.Text>

                    <button onClick={() => add(shiping?.price, shiping?.name)}>
                      {" "}
                      Add
                    </button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        <div className="total">
          <h4>Total Cost:{total} </h4>
          <button onClick={postshiped}>
            <Link to="/shiping"> Proced To Shiped</Link>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Book;
