import CheckBoxFilter from "../../common/CheckBoxFilter";
import { useState } from "react";
import PropTypes from 'prop-types';
import {  toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../../../public/assets/scss/components/_dashboard.scss';

const DetailedInfo = ({ formData }) => {
  const [formDetails, setFormDetails] = useState({
    bedroom: "",
    bathrooms: "",
    videoURL: "",
  });

  let [amenitiesDetails, setAmenitiesDetails] = useState({
    air: "",
    lawn: "",
    swimming: "",
    outdoor: "",
    GYM: "",
    wifi: "",
    laundry: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const updateData = () => {  
    formData.append('bedrooms', formDetails['bedroom']);
    formData.append('bathrooms', formDetails['bathrooms']);
    formData.append('videoURL', formDetails['videoURL']);

    amenitiesDetails = JSON.stringify(amenitiesDetails);
    formData.append('amenities', amenitiesDetails);
  }

  const handleDetailClick = (e) => {
    e.preventDefault();
    updateData();

    toast.success("Property detailed details added successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      style: { width: "350px", position: "relative", right: "50px" },
    });
  };

  const inputs = [
    { label: "Bedrooms", value: formDetails.bedroom, name: "bedroom" },
    { label: "Bathrooms", value: formDetails.bathrooms, name: "bathrooms" },
    { label: "Video URL", value: formDetails.videoURL, name: "videoURL" },
  ];

  return (
    <div className="row">     
      {inputs.map((input, index) => (
        <div className="col-lg-6 col-xl-4" key={index}>
          <div className="my_profile_setting_input form-group">
            <label htmlFor={input.name}>{input.label}</label>
            <input
              type="text"
              value={input.value}
              onChange={handleInputChange}
              className="form-control"
              name={input.name}
              id={input.name}
            />
          </div>
        </div>        
      ))}
      
      {/* End .col */}      

      {/* <div className="col-xl-12 ">
        <div className="my_profile_setting_input overflow-hidden mt10 mb50">
          <button className="btn btn1 float-start" onClick={handleDetailClick}>Back</button>
          <button className="btn btn2 float-end">Next</button>
        </div>
      </div> */}

      {/* End .col */}      

      <div className="col-xl-12">
        <h4 className="mb10">Amenities</h4>
      </div>
      <CheckBoxFilter formDetails={amenitiesDetails} setFormDetails={setAmenitiesDetails} />

      <div className="col-xl-12">
        <div className="my_profile_setting_input overflow-hidden mt20">
          <button className="btn btn1 float-start">Back</button>
          <button className="btn btn2 float-end" onClick={handleDetailClick}>Next</button>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

DetailedInfo.propTypes = {
  formData: PropTypes.instanceOf(FormData).isRequired,
};

export default DetailedInfo;
