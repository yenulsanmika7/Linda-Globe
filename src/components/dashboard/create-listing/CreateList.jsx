import { useState } from "react";
import PropTypes from 'prop-types';
import {  toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../../../public/assets/scss/components/_dashboard.scss';

// eslint-disable-next-line react/prop-types
const CreateList = ({ formData }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] =  useState('');
  const [status, setStatus] = useState('Apartment');
  const [price, setPrice] = useState('');
  const [rooms, setRooms] = useState('1');
  const [area, setArea] = useState('');


  const updatePropertyDetails = () => {
    if (formData) {
      const fields = [
        { name: 'title', value: title },
        { name: 'description', value: description },
        { name: 'type', value: status },
        { name: 'price', value: price },
        { name: 'rooms', value: rooms },
        { name: 'area', value: area },
      ];
  
      fields.forEach(({ name, value }) => {
        formData.append(name, value);
      });                
    }
  }

  const handleCreateListing = (event) => {
    event.preventDefault();
    updatePropertyDetails()
    
    toast.success('Property listing details added successfully!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      style: { width: "350px", position: 'relative', right: '50px' },
    });
  }

  return (
    <>
      <div className="col-lg-12">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="propertyTitle">Property Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="propertyTitle" />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-12">
        <div className="my_profile_setting_textarea">
          <label htmlFor="propertyDescription">Description</label>
          <textarea
            className="form-control"
            id="propertyDescription"
            rows="7"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input ui_kit_select_search form-group">
          <label>Status</label>
          <select
            className="selectpicker form-select"
            data-live-search="true"
            data-width="100%"
            value={status} 
            onChange={(e) => setStatus(e.target.value)}
          >
            <option data-tokens="Apartment">Apartment</option>
            <option data-tokens="Bungalow">Bungalow</option>
            <option data-tokens="House">House</option>
            <option data-tokens="Land">Land</option>
          </select>
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="formGroupExamplePrice">Price</label>
          <input
            type="number"
            className="form-control"
            id="formGroupExamplePrice"
            value={price}
            onChange={e => setPrice(e.target.value)}
          />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="formGroupExampleArea">Area</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleArea"
            value={area}
            onChange={e => setArea(e.target.value)}
          />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input ui_kit_select_search form-group">
          <label>Rooms</label>
          <select
            className="selectpicker form-select"
            data-live-search="true"
            data-width="100%"
            value={rooms} 
            onChange={(e) => setRooms(e.target.value)}
          >
            <option data-tokens="1">1</option>
            <option data-tokens="2">2</option>
            <option data-tokens="3">3</option>
            <option data-tokens="4">4</option>
            <option data-tokens="Other">Other</option>
          </select>
        </div>
      </div>
      {/* End .col */}

      <div className="col-xl-12">
        <div className="my_profile_setting_input">
          <button className="btn btn1 float-start">Back</button>
          <button className="btn btn2 float-end" onClick={handleCreateListing}>Next</button>
        </div>
      </div>
    </>
  );
};

CreateList.propTypes = {
  formData: PropTypes.instanceOf(FormData).isRequired,
};

export default CreateList;
