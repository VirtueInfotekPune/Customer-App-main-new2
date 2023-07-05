import React, { useEffect, useState } from 'react';
import './Order.css';
import axios from 'axios';

const Order = () => {
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await axios.get('API_URL');
        setOrderDetails(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrderDetails();
  }, []);

  return (
    <div className="order-main">
      <div className="order-head">
        <h1>Checkout</h1>
      </div>
      <div className="payment">
        <span className="green-text">Payment Mode:</span>
        <span>Cash on Delivery</span>
      </div>
      <div className="delivery">
        <span className="green-text">Deliver to:</span>
        <span>Nagpur, Maharashtra</span>
      </div>
      <div className="total">
        <span className="green-text">Total:</span>
        <span>120Rs</span>
      </div>
      <div className="button-main">
        <button className="order-button">Place Order</button>
      </div>
      {orderDetails && (
        <div className="order-details">
          <h2>Order Details:</h2>
          {/* Display order details*/}
        </div>
      )}
    </div>
  );
};

export default Order;
