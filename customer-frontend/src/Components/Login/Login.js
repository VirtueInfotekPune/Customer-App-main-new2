import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [userInfo, setUserInfo] = useState();

  const onSubmit = (data) => {
    setUserInfo(data);
    console.log(data);
    navigate("/home");
  };

  const onLoginSubmit = (e) => {
    e.preventDefault();
    // login();
    navigate("/home");
  };

  return (
    <div className="login-container">
      {/* <img src="https://thumbs.dreamstime.com/b/flat-lay-composition-overturned-paper-bag-groceries-black-wooden-background-space-text-flat-lay-composition-157615767.jpg" alt="" className='bgimage'/> */}

      {/* printing submitted data on screen */}
      <pre className="text-white">{JSON.stringify(userInfo, undefined, 2)}</pre>

      <div className="login-box">
        <div className="login-form">
          <form className="form-container" onSubmit={onLoginSubmit}>
            <h2 className="form-header">LOGIN</h2>
            <hr></hr>
            {/* <hr className="form-input" /> */}

            <div className="field-input">
              <label className="mt-2">Phone</label>
              <input required className="phone-input" type="text" name="number" placeholder="Enter your Phone No." {...register('email', { required: true })} />
            </div>
            <p className="phone-error">{errors.email && "Phone is required"}</p>

            <div className="field-input">
              <label>Password</label>
              <input required className="password-input" type="password" name="password" placeholder="Enter Password" {...register('password', { required: true }, { minLength: 4 })} />
            </div>
            <p className="password-error">{errors.password && "Password is required"}</p>

            <button className="submit-button">LOGIN</button>
            <p className="signup-link">Not a member? <Link to="/">Sign up here</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

