import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Signup.css'
import { useFormik } from "formik";
import axios from 'axios';
import { CustomerSchema } from "./Schema";

function Signup() {
  const navigate = useNavigate();
  const state = require('country-state-city').State;
  const city = require('country-state-city').City;
  const statelist = state.getStatesOfCountry("IN");
  const [citylist, setCitylist] = useState([]);

  const initialValues = {
    firstname: '',
    lastname: '',
    state: '',
    city: '',
    address: '',
    password: '',
    confirmpassword: '',
  }

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: CustomerSchema,
      onSubmit: (values, { resetForm }) => {
        axios.post("https://admindb.onrender.com/api/customer/", {
          firstname: values.firstname,
          lastname: values.lastname,
          contact: 8899778899,
          state: values.state,
          city: values.city,
          address: values.address,
          password: values.password,
        })
          .then((response) => {
            console.log(response);
            resetForm();
            navigate('/home');
          })
          .catch((error) => console.log(error))
      },
    });

  const handleStateChange = (e) => {
    handleChange(e);
    const temp = city.getCitiesOfState("IN", e.target.value);
    setCitylist(temp);
  }

  return (
    <div className="signup-container">
      <div className="signup-box">
        <div className="signup-form">
          <form className="form-container" onSubmit={handleSubmit}>
            <h2 className="form-header">UPDATE PROFILE</h2>
            <hr className="form-input" />

            <div className='flex flex-col py-2'>
              <label>Firstname</label>
              <input autoComplete="false" value={values.firstname} autoComplete="off" className='name-input' type="text" name='firstname' placeholder='Enter First Name' onBlur={handleBlur} onChange={handleChange} />
              {errors.firstname && touched.firstname ? (
                <p className="form-error">{errors.firstname}</p>
              ) : null}
            </div>
            <div className='flex flex-col py-2'>
              <label>Lastname</label>
              <input autoComplete="false" value={values.lastname} className='name-input' type="text" name='lastname' placeholder='Enter Last Name' onBlur={handleBlur} onChange={handleChange} />
              {errors.lastname && touched.lastname ? (
                <p className="form-error">{errors.lastname}</p>
              ) : null}
            </div>

            <div className="field-input">
              <label>State</label>
              <select className="state-input" name="state" value={values.state} onBlur={handleBlur} onChange={handleStateChange}>
                <option value="">Select a state...</option>
                {statelist.map((b) => (
                  <option key={b.id} value={b.isoCode}>{b.name}</option>
                ))}
              </select>
            </div>

            <div className="field-input">
              <label>City</label>
              <select className="state-input" name="city" value={values.city} onBlur={handleBlur} onChange={handleChange}>
                <option value='select'>Select a city</option>
                {citylist.map((b) => (
                  <option key={b.id} value={b.name}>{b.name}</option>
                ))}
              </select>
            </div>

            <div className='flex flex-col py-2'>
              <label>Address</label>
              <textarea autoComplete="false" onBlur={handleBlur} onChange={handleChange} value={values.address} rows="5" name="address" placeholder='Enter address' className='address-input'></textarea>
              {errors.address && touched.address ? (
                <p className="form-error">{errors.address}</p>
              ) : null}
            </div>

            <div className='flex flex-col py-2'>
              <label>Password</label>
              <input autoComplete="false" value={values.password} className='password-input' type="password" name='password' placeholder='Enter Password' onBlur={handleBlur} onChange={handleChange} />
              {errors.password && touched.password ? (
                <p className="form-error">{errors.password}</p>
              ) : null}
            </div>

            <div className='flex flex-col py-2'>
              <label>Confirm Password</label>
              <input autoComplete="false" value={values.confirmpassword} className='password-input' type="password" name='confirmpassword' placeholder='Confirm Password' onBlur={handleBlur} onChange={handleChange} />
              {errors.confirmpassword && touched.confirmpassword ? (
                <p className="form-error">{errors.confirmpassword}</p>
              ) : null}
            </div>

            <button type="submit" className="submit-button">UPDATE PROFILE</button>
            <button type="button" className="submit-button" onClick={() => navigate("/home")}>SKIP FOR NOW</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
