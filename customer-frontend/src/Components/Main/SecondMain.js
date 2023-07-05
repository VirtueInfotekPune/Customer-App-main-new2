import React from "react";
import "./SecondMain.css";
import Advertisement from "../Asset/adv.jpeg"
import { Link } from "react-router-dom";
// import Cards from "./Card"

const subcategory = [
  {
    title: "Vegetables",
    images: [
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/e6xaox01plthmuitto0x",
      "https://th.bing.com/th/id/OIP.ZjtL5OQQWdXW5vixn2ZXhgAAAA?pid=ImgDet&rs=1",
      "https://whiteoakinn.com/wp-content/uploads/2017/05/Unsplash-heder-neves-177219.jpg",
    ],
  },

  {
    title: "Fruits",
    images: [
      "https://wallpapercave.com/wp/wp6557561.jpg",
      "https://wallpapercave.com/wp/wp6557528.jpg",
      "https://wallpapercave.com/wp/wp6557500.jpg",
    ],
  },

  {
    title: "Eggs",
    images: [
      "https://th.bing.com/th/id/OIP.UIRCaUklCjjY6219DtKU9AHaGy?pid=ImgDet&rs=1",
      "https://th.bing.com/th/id/OIP.FUynRniDCk38fBMjbJgSIgHaFi?pid=ImgDet&w=503&h=376&rs=1",
      "https://th.bing.com/th/id/R.6199984e0daaf6092ce76d38c12b8df9?rik=LAgPcwfe%2f1uOzg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-XJRcP-vRNp8%2fURj9CuYCdoI%2fAAAAAAAAEbc%2fniauG5KWQcI%2fs640%2f20130205_4948_final.jpg&ehk=vcQlsKsNlv52c1N84MXJH11pIPMm%2fs9%2bGyGr6Fwxb%2fg%3d&risl=&pid=ImgRaw&r=0",
    ],
  },

  // Add more sections here with their respective images
];
const SecondMain = () => {
  return (
    <div className="second-container">
      <div className="advertisement">
        {/* <Cards/> */}
        <img
          src={Advertisement}
          alt="Advertisement"
          className="advertisement-photo"
        />
      </div>
      <div className="highlight-section">
        <h3 className="highlight-title">Highlights</h3>

        <div className="small-photos">
          <img
            src="https://th.bing.com/th/id/OIP.Gp0GOk0OHZ6TEncJE8insgHaEo?pid=ImgDet&w=1920&h=1200&rs=1"
            alt="Photo 1"
            className="small-photo"
          />
          <img
            src="https://th.bing.com/th/id/OIP.McUI3MJ_rXHonKLPmFRwSgHaD4?pid=ImgDet&w=1200&h=630&rs=1"
            alt="Photo 2"
            className="small-photo"
          />
          <img
            src="https://live.staticflickr.com/2005/1519987613_fddd6fe705_b.jpg"
            alt="Photo 3"
            className="small-photo"
          />
        </div>
      </div>
      <div className="subcategory-container">
        {subcategory.map((section, index) => (
          <div className="section" key={index}>
            <h3 className="section-title">{section.title}</h3>
            <div className="image-container">
              {section.images.map((image, i) => (
                <img
                  key={i}
                  src={image}
                  alt={`Image ${i + 1}`}
                  className="section-image"
                />
              ))}
            </div>
            <div className="view-btn">
              <Link to="/subcategory" className="view-button">
                View All
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default SecondMain;
