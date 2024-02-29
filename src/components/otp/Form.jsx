import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { signUp } from "@/actions/userActions";

const Form = () => {  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [OTP, setOTP] = useState('')

  const handleOTP = (event) => {
    setOTP(event.target.value);
  }

  const handleOTPVerify = (event) => {
    event.preventDefault();

    const userDetails  = JSON.parse(localStorage.getItem("USER_DATA"));
    userDetails['otp'] = OTP

    signUp(userDetails, dispatch)
        .then(() => {
            localStorage.removeItem("USER_DATA");
            navigate('/');
        })
        .catch(error => {
            console.error('Signup failed', error);
        });
  }

  return (
    <form action="#">
      <div className="heading text-center">
        <h3>OTP Verification</h3>
        <p className="text-center">
          Enter the code that we sent to your email {" "}
          <br />
          <Link to="/register" className="text-thm">
            Back
          </Link>
        </p>
      </div>
      {/* End .heading */}

      <div className="input-group mb-2 mr-sm-2">
        <input
          type="text"
          className="form-control"
          required
          placeholder="OTP Code"
          value={OTP}
          onChange={handleOTP}
        />

        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="flaticon-user"></i>
          </div>
        </div>
      </div>
      {/* End .input-group */}

      <button type="submit" className="btn btn-log w-100 btn-thm" onClick={handleOTPVerify}>
        Verify
      </button>
    </form>
  );
};

export default Form;
