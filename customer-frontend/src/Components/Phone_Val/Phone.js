import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import OtpInput from "otp-input-react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {auth} from "../../firebase.config"
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";


export default function Phone() {
    const [otp, setOtp] = useState("");
    const [ph, setPh] = useState("");
    const [loading, setLoading] = useState(false);
    const [showOTP, setShowOTP] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

  
    function onCaptchVerify() {
      if (!window.recaptchaVerifier) {
        window.recaptchaVerifier = new RecaptchaVerifier(
          "recaptcha-container",
          {
            size: "invisible",
            callback: (response) => {
              onSignup();
            },
            "expired-callback": () => { },
          },
          auth
        );
      }
    }
  
    function onSignup() {
      if(ph.length!=12){
        toast.error("Please enter a valid phone number")
        return
      }
      navigate("/signup")
      // setLoading(true);
      // onCaptchVerify();
  
      // const appVerifier = window.recaptchaVerifier;
  
      // const formatPh = "+" + ph;
  
      // signInWithPhoneNumber(auth, formatPh, appVerifier)
      //   .then((confirmationResult) => {
      //     window.confirmationResult = confirmationResult;
      //     setLoading(false);
      //     setShowOTP(true);
      //     toast.success("OTP sent successfully!");
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //     setLoading(false);
      //   });
    }
  
    function onOTPVerify() {
      setLoading(true);
      window.confirmationResult
        .confirm(otp)
        .then(async (res) => {
          console.log(res);
          setUser(res.user);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  
    return (
      <section className="bg-emerald-500 flex items-center justify-center h-screen">
        <div>
          <Toaster toastOptions={{ duration: 4000 }} />
          <div id="recaptcha-container"></div>
          {user ? (
            navigate("/signup")
          ) : (
            <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
              <h1 className="text-center leading-normal text-white font-medium text-3xl mb-6">
                Welcome to <br /> B2C APP
              </h1>
              {showOTP ? (
                <>
                  <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                    <BsFillShieldLockFill size={30} />
                  </div>
                  <label
                    htmlFor="otp"
                    className="font-bold text-xl text-white text-center"
                  >
                    Enter your OTP
                  </label>
                  <OtpInput
                    value={otp}
                    onChange={setOtp}
                    OTPLength={6}
                    otpType="number"
                    disabled={false}
                    autoFocus
                    className="opt-container "
                  ></OtpInput>
                  <button
                    onClick={onOTPVerify}
                    className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                  >
                    {loading && (
                      <CgSpinner size={20} className="mt-1 animate-spin" />
                    )}
                    <span>Verify OTP</span>
                  </button>
                </>
              ) : (
                <>
                  <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                    <BsTelephoneFill size={30} />
                  </div>
                  <label
                    htmlFor=""
                    className="font-bold text-xl text-white text-center"
                  >
                    Enter your Phone Number
                  </label>
                  <PhoneInput country={"in"} value={ph} onChange={setPh} />
                  <button
                    onClick={onSignup}
                    className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                  >
                    {loading && (
                      <CgSpinner size={20} className="mt-1 animate-spin" />
                    )}
                    {/* <span>Send code via SMS</span> */}
                    <span>Register</span>
                  </button>
                </>
              )}
            </div>
          )}
        </div>
        <p className="login-link">Already registered? <Link to="/login">Log in here</Link></p>
      </section>
    );
}
