import Map from "@/components/common/Map";
import { useState } from "react";
import PropTypes from 'prop-types';
import {  toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../../../public/assets/scss/components/_dashboard.scss';

const LocationField = ({ formData }) => {
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');

  const updatePropertyDetails = () => {
    if (formData) {
      const locationFields = {
        address: address,
        country: country,
        city: city,
        zip: zip
      };
      const locationFieldsString = JSON.stringify(locationFields);
  
      formData.append('location', locationFieldsString)
    }
  }

  const handleLocationSubmit = (e) => {
    e.preventDefault();
    if (!address || !city) {
      toast.error('Enter either address or city!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
    else {
      updatePropertyDetails();
      toast.success('Property location details added successfully!', {
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
    
  }

  return (
    <>
      <div className="col-lg-12">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="propertyAddress">Address</label>
          <input type="text" className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} id="propertyAddress" />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="propertyState">County / State</label>
          <input type="text" className="form-control" value={country} onChange={e => setCountry(e.target.value)} id="propertyState" />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="propertyCity">City</label>
          <input type="text" value={city} onChange={e => setCity(e.target.value)} className="form-control" id="propertyCity" />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-4 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="zipCode">Zip</label>
          <input type="text" value={zip} onChange={e => setZip(e.target.value)} className="form-control" id="zipCode" />
        </div>
      </div>
      {/* End .col */}     

      <div className="col-lg-12">
        <div className="my_profile_setting_input form-group">
          <div className="h400 bdrs8" id="map-canvas">
            <div className="gmap_canvas pe-none">
            <Map/>
            </div>
          </div>
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-4 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="googleMapLat">Latitude (for Google Maps)</label>
          <input type="text" className="form-control" id="googleMapLat" />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-4 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="googleMapLong">Longitude (for Google Maps)</label>
          <input type="text" className="form-control" id="googleMapLong" />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-4 col-xl-4">
        <div className="my_profile_setting_input ui_kit_select_search form-group">
          <label>Google Map Street View</label>
          <select
            className="selectpicker form-select"
            data-live-search="true"
            data-width="100%"
          >
            <option data-tokens="Turkey">Street View v1</option>
            <option data-tokens="Iran">Street View v2</option>
            <option data-tokens="Iraq">Street View v3</option>
            <option data-tokens="Spain">Street View v4</option>
            <option data-tokens="Greece">Street View v5</option>
            <option data-tokens="Portugal">Street View v6</option>
          </select>
        </div>
      </div>
      {/* End .col */}

      <div className="col-xl-12 mt-5">
        <div className="my_profile_setting_input">
          <button className="btn btn1 float-start">Back</button>
          <button className="btn btn2 float-end" onClick={handleLocationSubmit}>Next</button>
        </div>
      </div>
      {/* End .col */}
    </>
  );
};

LocationField.propTypes = {
  formData: PropTypes.instanceOf(FormData).isRequired,
};

export default LocationField;
