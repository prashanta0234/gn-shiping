import React, { useRef, useState } from "react";
import { Container } from "react-bootstrap";
import Admin from "./Admin";
import "./AddUpdate.css";

const AddUpdate = () => {
  // const [addProduct,setAddProduct] =useState({})
  const nameRef = useRef();
  const priceRef = useRef();
  const imgRef = useRef();
  const desRef = useRef();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const [description, setdescription] = useState("");
  const axios = require("axios").default;

  const addhandleShiping = (e) => {
    const names = nameRef.current.value;
    const prices = priceRef.current.value;
    const imgs = imgRef.current.value;
    const descriptions = desRef.current.value;
    setName(names);
    setPrice(prices);
    setImg(imgs);
    setdescription(descriptions);

    if (!name) {
      console.log("sdsdsd");
    } else {
      axios
        .post("https://obscure-peak-30332.herokuapp.com/services", {
          name,
          price,
          img,
          description,
        })
        .then(function (response) {
          if (response.data) {
            alert("Insert SuccessFully!");
            e.target.reset();
          }
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      console.log(name, price, img, description);
      e.preventDefault();
    }
  };

  return (
    <div>
      <Admin></Admin>

      <Container>
        <form action="" className="serviceInput" onSubmit={addhandleShiping}>
          <input type="text" placeholder="Add Product Name" ref={nameRef} />
          <input type="number" placeholder="Add Price" ref={priceRef} />
          <input type="text" placeholder="Image Url" ref={imgRef} />
          <br />
          <textarea placeholder="Enter Description" ref={desRef}></textarea>
          <br />

          <button>Add All</button>
        </form>
      </Container>
    </div>
  );
};

export default AddUpdate;
