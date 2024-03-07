import { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { isSinglePageActive } from "../../../../utils/daynamicNavigation";
import { useDispatch, useSelector } from "react-redux";
import {  toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { logout } from "@/actions/userActions";
import { profilePicUpdate } from "@/actions/userActions";

// eslint-disable-next-line react/prop-types
const MyAccount = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const fileInputRef = useRef(null);
  
  const { user } = useSelector((state) => state.userLogin);

  const API_URL = import.meta.env.VITE_NODE_BACKEND_URL;  

  const handleUserImageClick = () => {
    fileInputRef.current.click();
  };

  const handleLogout = () => {
    dispatch(logout)
      .then(() => {
        navigate('/');
      })
      .catch(() => {
        console.log('Error while logging out!')
      })
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData()
      formData.append('profileImage', file)
      // eslint-disable-next-line react/prop-types
      formData.append('email', user.email)

      profilePicUpdate(formData, dispatch)
        .then(() => {
          toast.success('Profile image added succesfully', {
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
            window.location.reload();
          }, 5000);         
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
  }

  const profileMenuItems = [
    { id: 1, name: "My Profile", ruterPath: "/my-profile" },
    { id: 2, name: " My Message", ruterPath: "/my-message" },
    { id: 3, name: " My Favourite", ruterPath: "/my-favourites" },
    { id: 4, name: " My Package", ruterPath: "/my-package" },
    { id: 5, name: " Log out", onClick: handleLogout  },
  ];

  return (
    <>
      <div className="user_set_header" onClick={handleUserImageClick}>
        <img         
          className="float-start"
          src={`${API_URL}${user.profileImageUrl}`}
          alt="Profile Image"
          style={{ cursor: 'pointer', width: '45px', height: '45px' }}
        />
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: 'none' }} 
        />
        <p>
          {user.username}<br />
          <span className="address">{user.email}</span>
        </p>
      </div>
      {/* End user_set_header */}

      <div className="user_setting_content">
        {profileMenuItems.map((item) => (
          <Link
            to={item.ruterPath}
            key={item.id}
            className="dropdown-item"
            style={
              isSinglePageActive(`${item.ruterPath}`, pathname)
                ? { color: "#000" }
                : undefined
            }
            onClick={() => item.onClick?.()}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </>
  );
};

export default MyAccount;
