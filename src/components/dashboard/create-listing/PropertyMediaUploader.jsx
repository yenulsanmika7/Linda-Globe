import { useState } from "react";
import selectedFiles from "../../../utils/selectedFiles";
import PropTypes from 'prop-types';
import {  toast, Bounce } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { createProperty } from '../../../actions/propertyActions';
import { useDispatch, useSelector } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';

const PropertyMediaUploader = ({ formData }) => {  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [propertySelectedImgs, setPropertySelectedImgs] = useState([]);

  const { user } = useSelector((state) => state.userLogin);
  
  // multiple image select
  const multipleImage = (e) => {
    // checking is same file matched with old stored array
    const isExist = propertySelectedImgs?.some((file1) =>
      selectedFiles(e)?.some((file2) => file1.name === file2.name)
    );

    if (!isExist) {
      setPropertySelectedImgs((old) => [...old, ...selectedFiles(e)]);
    } else {
      alert("You have selected one image already!");
    }
  };

  // delete image
  const deleteImage = (name) => {
    const deleted = propertySelectedImgs?.filter((file) => file.name !== name);
    setPropertySelectedImgs(deleted);
  };

  const handleAddProperty = (event) => {
    event.preventDefault();

    if (propertySelectedImgs.length > 0) {
      propertySelectedImgs.forEach((imageFile) => {
        formData.append('propertyImages', imageFile); 
      });

      formData.append('email', user.email)

      for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      } 

      createProperty(formData, dispatch, navigate)        
    } 
    else {
      toast.error('Please select atleast one image!', {
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
  }

  return (
    <div className="row">
      <div className="col-lg-12">
        <ul className="mb-0">
          {propertySelectedImgs.length > 0
            ? propertySelectedImgs?.map((item, index) => (
                <li key={index} className="list-inline-item">
                  <div className="portfolio_item">
                    <img
                  
                      className="img-fluid cover"
                      src={URL.createObjectURL(item)}
                      alt="fp1.jpg"
                    />
                    <div
                      className="edu_stats_list"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Delete"
                      data-original-title="Delete"
                    >
                      <a onClick={() => deleteImage(item.name)}>
                        <span className="flaticon-garbage"></span>
                      </a>
                    </div>
                  </div>
                </li>
              ))
            : undefined}

          {/* End li */}
        </ul>
      </div>
      {/* End .col */}

      <div className="col-lg-12">
        <div className="portfolio_upload">
          <input
            type="file"
            onChange={multipleImage}
            multiple
            name="images"
            accept="image/png, image/gif, image/jpeg"
          />
          <div className="icon">
            <span className="flaticon-download"></span>
          </div>
          <p>Drag and drop images here</p>
        </div>
      </div>
      {/* End .col */}

      <div className="col-xl-6">
        <div className="resume_uploader mb30">
          <h3>Attachments</h3>
          <form className="form-inline d-flex flex-wrap wrap">
            <input className="upload-path" />
            <label className="upload">
              <input type="file" />
              Select Attachment
            </label>
          </form>
        </div>
      </div>
      {/* End .col */}

      <div className="col-xl-12">
        <div className="my_profile_setting_input">
          <button className="btn btn1 float-start">Back</button>
          <button className="btn btn2 float-end" onClick={handleAddProperty}>Add</button>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

PropertyMediaUploader.propTypes = {
  formData: PropTypes.instanceOf(FormData).isRequired,
};

export default PropertyMediaUploader;
