import React, { useState } from "react";
import "./Detail.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import { get } from "express/lib/response";
import { useEffect } from "react";

const Detail = () => {
  const navigate = useNavigate();
  const [selectedQty, setSelectedQty] = useState(1);
  const [obj, setobj] = useState(null)

  useEffect(() => {
    axios.get("https://adminlm.onrender.com/api/product/")
      .then(response => {
        console.log(response.data);
        setobj(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [])
  
  // const obj = {
  //   productname: "Product Name",
  //   productprice: "Product Price",
  //   uom: "Product UOM",
  // };

  const incrementQty = () => {
    setSelectedQty(selectedQty + 1);
  };

  const decrementQty = () => {
    if (selectedQty > 1) {
      setSelectedQty(selectedQty - 1);
    }
  };

  const handlePlaceOrderClick = async () => {
    try {
      await axios.post("http://127.0.0.1:8000/cart/cart/", {
        //add data
      });
      navigate("/placeorder");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="product-detail">
      <div className="product-detail-image">
        <img
          src="https://imgs.search.brave.com/ZPqjz-A-5mwa6K9YaIHw_gOeZlD3a_9zKo1M3o9lMak/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/dmVnYW4uaW8vYmxv/Zy9hc3NldHMvMTAt/aGVhbHRoaWVzdC12/ZWdldGFibGVzLXRv/LWluY2x1ZGUtaW4t/eW91ci12ZWdhbi1k/aWV0LTIwMTgtMDQt/MTYvaGVhbHRoaWVz/dC12ZWdldGFibGVz/LWRmMWNmNTUwNzEx/MDc2ZDA1MmVhYWRl/MTJjMzgyODlhMjYz/N2MzOGU1NDYxODJk/M2MwMTM2YTkwY2Iw/YmIwYjMuanBn"
          alt="product-image"
        />
      </div>
      <div className="product-detail-info">
        <h1 className="product-detail-title">{obj.productname}</h1>
        {/* <p className="product-detail-description">
          Product description goes here.
        </p> */}
        <div className="product-detail-price">
          <p className="product-detail-price-label">Price: </p>
          <p className="product-detail-price-amount">{obj.productprice}</p>
          <p className="product-detail-price-unit">per {obj.uom}</p>
        </div>
        <div className="product-detail-quantity">
          <p className="product-detail-quantity-label">Quantity:</p>
          <div className="product-detail-control">
            <button
              className="product-detail-quantity-decrement"
              onClick={decrementQty}
            >
              -
            </button>
            <input
              className="product-detail-quantity-input"
              type="number"
              value={selectedQty}
              readOnly
            />
            <button
              className="product-detail-quantity-increment"
              onClick={incrementQty}
            >
              +
            </button>
          </div>
        </div>
        <Link
          to="/placeorder"
          onClick={handlePlaceOrderClick}
          className="product-detail-cart"
        >
          Buy Now
        </Link>
      </div>
    </div>
  );
};

export default Detail;
