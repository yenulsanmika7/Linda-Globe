import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import {  toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { otpVerifiy } from "@/actions/otpActions";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();  
  
  const { error } = useSelector((state) => state.otpVerification);

  function maskEmail(email) {
    const [localPart, domainPart] = email.split('@');
    const visiblePart = localPart.substring(0, 2);
    const maskedLocalPart = visiblePart + '*'.repeat(localPart.length - 2);
    return maskedLocalPart + '@' + domainPart;
  }

  const [registerError, setRegisterError] = useState('') 
  const [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }; 

  useEffect(() => {
    if (username === '' || email === '' || !password === '') {
      setRegisterError('All fields are required')
    } else {
      setRegisterError('')
    }
  }, [username, email, password])

  const handleSignUp = () => {
    if (username === '' && email === '' && password === '') {
      toast.error(registerError, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });      
    } else {    
      localStorage.setItem("USER_DATA", JSON.stringify({ username, email, password }));

      otpVerifiy({ email }, dispatch)
        .then(() => {
          email = maskEmail(email);
          toast.success(`OTP sent succesfully to ${email}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
          setTimeout(() => {   
            navigate('/otp-verification');
          }, 5000);
        })
        .catch(() => {
          setRegisterError(error.message);
          toast.error(registerError, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });   
        });     
    }     
  };

  return (
    <div>
      <div className="heading text-center">
        <h3>Register to your account</h3>
        <p className="text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-thm">
            Login
          </Link>
        </p>
      </div>
      {/* End .heading */}

      <div className="form-group input-group ">
        <input
          type="text"
          className="form-control"
          required
          placeholder="User Name"
          value={username}
          onChange={handleUsername}
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="flaticon-user"></i>
          </div>
        </div>
      </div>
      {/* End .form-group */}

      <div className="form-group input-group  ">
        <input
          type="email"
          className="form-control"
          required
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fa fa-envelope-o"></i>
          </div>
        </div>
      </div>
      {/* End .form-group */}

      <div className="form-group input-group  ">
        <input
          type="password"
          className="form-control"
          required
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="flaticon-password"></i>
          </div>
        </div>
      </div>
      {/* End .form-group */}

      <div className="form-group input-group  ">
        <input
          type="password"
          className="form-control"
          required
          placeholder="Re-enter password"
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="flaticon-password"></i>
          </div>
        </div>
      </div>
      {/* End .form-group */}

      <div className="form-group form-check custom-checkbox mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          required
        
        />
        <label className="form-check-label form-check-label" >
          I have read and accept the Terms and Privacy Policy?
        </label>
      </div>
      {/* End .form-group */}

      <button type="submit" onClick={handleSignUp} className="btn btn-log w-100 btn-thm">
        Register
      </button>
      {/* login button */}

      <div className="divide">
        <span className="lf_divider">Or</span>
        <hr />
      </div>
      {/* devider */}

      <div className="row mt25">
        <div className="col-lg-6">
          <button
            type="submit"
            className="btn btn-block color-white bgc-fb mb0 w-100"
          >
            <i className="fa fa-facebook float-start mt5"></i> Facebook
          </button>
        </div>
        {/* End .col */}

        <div className="col-lg-6">
          <button
            type="submit"
            className="btn btn-block color-white bgc-gogle mb0 w-100"
          >
            <i className="fa fa-google float-start mt5"></i> Google
          </button>
        </div>
        {/* End .col */}
      </div>
      {/* more signin options */}
    </div>
  );
};

export default Form;
