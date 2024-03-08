import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { profilePicUpdate } from "@/actions/userActions";
import { updateUser, getUserData } from "@/actions/userActions"

const ProfileInfo = () => {
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.userLogin);
    const { error } = useSelector((state) => state.userUpdate);

    const [formData, setFormData] = useState({
        username: user.username || "",
        phone: user.phone || "",
        fname: user.firstName || "",
        lname: user.lastName || "",
        address: user.address || "",
        email: user.email
    });

    const API_URL = import.meta.env.VITE_NODE_BACKEND_URL;     

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });         
    }

    const handleUserUpdate = (event) => {
        event.preventDefault();
        console.log(formData)
        updateUser(formData, dispatch)
            .then(() => {
                if (error === null) {
                    toast.success('Profile updated successfully!', {
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
                    getUserData(dispatch)
                    .then(() => {
                    console.log('Get user data successfully!')
                    })
                    .catch(() => {
                    console.log('Error while getting data!')
                    })   
                } 
                else {
                    toast.error('Try again later!', {
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
                }  
            })
            .catch(() => {
                console.log("Server error!")
            })
    }
  
    // upload profile
    const uploadProfile = (e) => {
        const file = e.target.files[0];
        if (file) {
            const formData = new FormData()
            formData.append('profileImage', file)
            // eslint-disable-next-line react/prop-types
            formData.append('email', user.email)
      
            profilePicUpdate(formData, dispatch)
              .then(() => {
                console.log("Image updated!")
                window.location.reload();         
              })
              .catch(() => {
                toast.error('Try again later!', {
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
              })
          }
    };

    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="wrap-custom-file">
                    <input
                        type="file"
                        id="image1"
                        onChange={uploadProfile}
                    />
                    <label
                        style={
                            user !== null
                                ? {
                                      backgroundImage: `${API_URL}${user.profileImageUrl}`,
                                  }
                                : undefined
                        }
                        htmlFor="image1"
                    >
                        <span>
                            <i className="flaticon-download"></i> Upload Photo{" "}
                        </span>
                    </label>
                </div>
                <p>*minimum 260px x 260px</p>
            </div>
            {/* End .col */}

            <div className="col-lg-6 col-xl-6">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="formGroupExampleInput1">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput1"
                        value={formData.username}
                        onChange={handleInputChange}
                        name="username"
                    />
                </div>
            </div>
            {/* End .col */}

            <div className="col-lg-6 col-xl-6">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="formGroupExampleInput8">Phone</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput8"
                        value={formData.phone}
                        onChange={handleInputChange}
                        name="phone"
                    />
                </div>
            </div>
            {/* End .col */}

            <div className="col-lg-6 col-xl-6">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="formGroupExampleInput3">First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput3"
                        value={formData.fname}
                        onChange={handleInputChange}
                        name="fname"
                    />
                </div>
            </div>
            {/* End .col */}

            <div className="col-lg-6 col-xl-6">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="formGroupExampleInput4">Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput4"
                        value={formData.lname}
                        onChange={handleInputChange}
                        name="lname"
                    />
                </div>
            </div>
            {/* End .col */}        

            <div className="col-xl-12">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="formGroupExampleInput13">Address</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput13"
                        value={formData.address}
                        onChange={handleInputChange}
                        name="address"
                    />
                </div>
            </div>
            {/* End .col */}

            <div className="col-xl-12 text-right">
                <div className="my_profile_setting_input">
                    <button className="btn btn1">View Public Profile</button>
                    <button className="btn btn2" onClick={handleUserUpdate}>Update Profile</button>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
