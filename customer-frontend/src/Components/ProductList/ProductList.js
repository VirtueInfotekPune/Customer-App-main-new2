import React from 'react';
import './ProductList.css';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function ProductList() {

    const location = useLocation()
    let obj = location.state;
    console.log(obj);

    const [products, setproducts] = useState([]);

    const getProducts = async () => {
        const response = await fetch(`https://admindashb.onrender.com/api/product/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const json = await response.json();
        let jsonobj = [];
        json.filter((item) => {
            if (item.category === obj.category && item.subcategory === obj.subcategory) {
                jsonobj.push(item);
            }
        })
        setproducts(jsonobj);
        console.log(jsonobj)
    }
    useEffect(() => {
        getProducts();
    }, []);

    const tempobj = {
        image: "https://via.placeholder.com/150x150",
        productname: "Product name",
        brand: "250g",
        productprice: "79"
    }


    return (
        <div className="subcategory-page mt-64">
            <h1 className="subcategory-heading">Product List</h1>
            <div className="subcategory-row">
                {
                    products.map((item) => {
                        return (
                            <ProductCard
                                obj={item}
                            />
                        )
                    }
                    )
                }
                <ProductCard
                    obj={tempobj}
                />
                <ProductCard
                    obj={tempobj}
                />
                <ProductCard
                    obj={tempobj}
                />
            </div>
            <div className="subcategory-row">
                <ProductCard
                    obj={tempobj}
                />
                <ProductCard
                    obj={tempobj}
                />
                <ProductCard
                    obj={tempobj}
                />
                <ProductCard
                    obj={tempobj}
                />
            </div>
            <h2 className="trending-heading">Trending</h2>
            <div className="trending-row">
                <ProductCard
                    obj={tempobj}
                />
                <ProductCard
                    obj={tempobj}
                />
            </div>
            <h2 className="top-seller-heading">Top Sellers</h2>
            <div className="top-seller-row">
                <ProductCard
                    obj={tempobj}
                />
                <ProductCard
                    obj={tempobj}
                />
            </div>
        </div>
    );
}

function ProductCard(props) {
    const { obj } = props;
    

    return (
        <div className="product-card">
            <div className="product-image">
                {/* <img src={obj.image} alt={obj.productname} /> */}
                <img src={obj.image}></img>
            </div>
            {/* <h2 className="product-title ">{obj.productname}</h2> */}
            <p className="product-weight ">brand : {obj.brand}</p>
            <div className="product-price">
                <p>Rs. {obj.productprice}</p>
                <button className='cart-btn'><Link to="/productdetails"  >Add to cart</Link></button>
            </div>
        </div>
    );
}

// *************************************************
