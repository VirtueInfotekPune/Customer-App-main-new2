import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./OTP.css";

function SignupForm() {
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const handleOtpSubmit = (event) => {
    event.preventDefault();

    //Verify the OTP
    if (otp === "1234") {
      setOtpVerified(true);
      navigate("/home"); //navigate to home
    } else {
      alert("Invalid OTP!");
    }
  };

  const handleResendOtpClick = () => {
    //otp validation
    setOtpSent(true);
  };

  const renderMobileNumberForm = () => {
    return (
      <div>
        <h1 className="otp-head">Please verify your mobile number</h1>
        <form onSubmit={() => setOtpSent(true)} className="otp-form">
          <label className="number">
            Mobile Number:
            <input
              type="tel"
              value={mobileNumber}
              onChange={handleMobileNumberChange}
              required
            />
          </label>
          <button type="submit" className="update">
            Send OTP
          </button>
        </form>
      </div>
    );
  };

  const renderOtpForm = () => {
    return (
      <div>
        <h1 className="otp-head">Enter your OTP here</h1>
        <form onSubmit={handleOtpSubmit} className="otp-form">
          <label>
            OTP:
            <input
              type="number"
              value={otp}
              onChange={handleOtpChange}
              required
            />
          </label>
          <button type="submit" className="update">
            Verify OTP
          </button>
        </form>
      </div>
    );
  };

  const renderResendOtpButton = () => {
    return (
      <div className="update-new">
        <button type="button" onClick={handleResendOtpClick}>
          Resend OTP
        </button>
      </div>
    );
  };

  if (!otpSent) {
    return renderMobileNumberForm();
  } else if (!otpVerified) {
    return (
      <div>
        {renderOtpForm()}
        {renderResendOtpButton()}
      </div>
    );
  } else {
    // navigate to "/home"
    navigate("/home");
    return null;
  }
}

export default SignupForm;
