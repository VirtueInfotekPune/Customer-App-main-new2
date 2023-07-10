
import './SubCategory.css';
import { Link, useLocation } from 'react-router-dom';
//import axios from 'axios';
import React, { useState, useEffect } from 'react';


function SubcategoryPage(props) {

  const location = useLocation()
  let category = location.state;
  console.log(category);

  const [subcats, setsubcats] = useState([]);

  const getSubCatArray = async () => {
    const response = await fetch(`https://adminlm.onrender.com/api/subcategory/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const json = await response.json();
    let jsonobj = [];
    json.filter((item) => {
      if (item.category === category) {
        jsonobj.push(item);
      }
    })
    setsubcats(jsonobj);
    console.log(jsonobj)
  }
  useEffect(() => {
    getSubCatArray();
  }, []);




  return (
    // <div className="subcategory-page">
    //   <h1 className="subcategory-heading">Subcategory Name</h1>
    //   <div className="subcategory-row">
    //   <ProductCard
    //       image="https://via.placeholder.com/150x150"
    //       title="Product name"
    //       weight="250g"
    //       price="Rs.79"
    //     />
    //     <ProductCard
    //       image="https://via.placeholder.com/150x150"
    //       title="Product name"
    //       weight="500g"
    //       price="Rs.59"
    //     />
    //     <ProductCard
    //       image="https://via.placeholder.com/150x150"
    //       title="Product name"
    //       weight="1000g"
    //       price="Rs.120"
    //     />
    //     <ProductCard
    //       image="https://via.placeholder.com/150x150"
    //       title="Product name"
    //       weight="1500g"
    //       price="Rs.199"
    //     />
    //   </div>
    //   <div className="subcategory-row">
    //   <ProductCard
    //       image="https://via.placeholder.com/150x150"
    //       title="Product name"
    //       weight="250g"
    //       price="Rs.79"
    //     />
    //     <ProductCard
    //       image="https://via.placeholder.com/150x150"
    //       title="Product name"
    //       weight="500g"
    //       price="Rs.59"
    //     />
    //     <ProductCard
    //       image="https://via.placeholder.com/150x150"
    //       title="Product name"
    //       weight="1000g"
    //       price="Rs.120"
    //     />
    //     <ProductCard
    //       image="https://via.placeholder.com/150x150"
    //       title="Product name"
    //       weight="1500g"
    //       price="Rs.199"
    //     />
    //   </div>
    //   <h2 className="trending-heading">Trending</h2>
    //   <div className="trending-row">
    //   <ProductCard
    //       image="https://via.placeholder.com/150x150"
    //       title="Product name"
    //       weight="1000g"
    //       price="Rs.120"
    //     />
    //     <ProductCard
    //       image="https://via.placeholder.com/150x150"
    //       title="Product name"
    //       weight="1500g"
    //       price="Rs.199"
    //     />
    //   </div>
    //   <h2 className="top-seller-heading">Top Sellers</h2>
    //   <div className="top-seller-row">
    //   <ProductCard
    //       image="https://via.placeholder.com/150x150"
    //       title="Product name"
    //       weight="1000g"
    //       price="Rs.120"
    //     />
    //     <ProductCard
    //       image="https://via.placeholder.com/150x150"
    //       title="Product name"
    //       weight="1500g"
    //       price="Rs.199"
    //     />
    //   </div>
    // </div>




    <>
      <h1 className="subcategory-heading">Shop By Subcategory</h1>
      {/* <div className="mt-0 cards">
        {subcats.map((card) => (
          <div
            key={card.id}
            className="card"
            style={{ backgroundColor: card.backcolor }}
          >
            <img src="https://via.placeholder.com/200" alt="card-image" className="card-image" />
            <div className="card-title">{card.subcategory}</div>
            <Link
              to="/productlist"
              state={{ subcategory: card.subcategory, category: category }}
              className="card-offer"
              style={{ backgroundColor: card.color }}
            >
              {card.offer}
            </Link>
          </div>
        ))}
      </div> */}



      <h2 className="trending-heading">Trending</h2>
      <div className="trending-row">
        <ProductCard
          image="https://via.placeholder.com/150x150"
          title="Product name"
          weight="1000g"
          price="Rs.120"
        />
        <ProductCard
          image="https://via.placeholder.com/150x150"
          title="Product name"
          weight="1500g"
          price="Rs.199"
        />
         <ProductCard
          image="https://via.placeholder.com/150x150"
          title="Product name"
          weight="1500g"
          price="Rs.199"
        />
         <ProductCard
          image="https://via.placeholder.com/150x150"
          title="Product name"
          weight="1500g"
          price="Rs.199"
        />
      </div>
      <h2 className="top-seller-heading">Top Sellers</h2>
      <div className="top-seller-row">
        <ProductCard
          image="https://via.placeholder.com/150x150"
          title="Product name"
          weight="1000g"
          price="Rs.120"
        />
        <ProductCard
          image="https://via.placeholder.com/150x150"
          title="Product name"
          weight="1500g"
          price="Rs.199"
        />
      </div>

    </>
  );
}

function ProductCard(props) {
  const { image, title, weight, price } = props;

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <h2 className="product-title">{title}</h2>
      <p className="product-weight">{weight}</p>
      <div className="product-price">
        <p>{price}</p>
        <button className='cart-btn'><Link to="/productlist" >Add to cart</Link></button>
      </div>
    </div>
  );
}

export default SubcategoryPage;
