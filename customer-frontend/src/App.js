import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import LoginPage from "./routes/LoginPage";
import Home from "./routes/Home";
import Product from "./routes/Product";
import PlaceOrder from "./routes/PlaceOrder";
import SignUp from "./routes/SignUp";
import Profile from "./routes/Profile";
import UpdateProfile from "./routes/UpdateProfile";
import ChangePassword from "./routes/ChangePassword";
import OTP from "./routes/OTP";
import Orders from "./routes/Orders";
import Notification from "./routes/Notification";
import Wallet from "./routes/Wallet";
import Phone from "./Components/Phone_Val/Phone";
import ShowProducts from "./routes/ShowProducts";
import ProductDetails from "./Components/ProductDetail/ProductDetails";
import Cart from "./routes/Cart";

function App() {
  return (
    <div>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Phone</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/subcategory">Product</Link>
          </li>
          <li>
            <Link to="/productdetails">Product Details</Link>
          </li>
          <li>
            <Link to="/placeorder">Place Order</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/updateProfile">Update Profile</Link>
          </li>
          <li>
            <Link to="/changePassword">Change Password</Link>
          </li>
          <li>
            <Link to="/otp">OTP</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/notification">Notification</Link>
          </li>
          <li>
            <Link to="/wallet">Wallet</Link>
          </li>
          <li>
            <Link to="/productlist">Product List</Link>
          </li>
        </ul>
      </nav> */}

      <Routes>
        <Route path="/" element={<Phone />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/subcategory" element={<Product />} />
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/updateProfile" element={<UpdateProfile />} />
        <Route path="/changePassword" element={<ChangePassword />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/productlist" element={<ShowProducts />} />
      </Routes>
    </div>
  );
}

export default App;


