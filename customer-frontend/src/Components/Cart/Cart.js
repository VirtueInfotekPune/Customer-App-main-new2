import React from 'react';
import './Cart.css';

const Cart = () => {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  const removeItem = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    window.location.reload(); // Refresh the page to reflect the changes
  };

  return (
    <div>
      <h1 className="Cart-head">Cart Collection</h1>
      {cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <div>
          {Array(Math.ceil(cartItems.length / 3))
            .fill(null)
            .map((_, rowIndex) => (
              <div className="cart-row" key={rowIndex}>
                {cartItems.slice(rowIndex * 3, rowIndex * 3 + 3).map((item, index) => (
                  <div className="cart-item" key={index}>
                    <img src={item.image} alt={item.productname} className="cart-item-image" />
                    <div className="cart-item-details">
                      <p>{item.productname}</p>
                      <p>Price: {item.productprice}</p>
                      <p>Brand: {item.brand}</p>
                    </div>
                    <button className="cart-item-remove" onClick={() => removeItem(index + rowIndex * 3)}>
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
