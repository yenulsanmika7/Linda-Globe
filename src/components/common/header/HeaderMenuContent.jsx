import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { Link , useLocation } from "react-router-dom";
import MyAccount from "./dashboard/MyAccount"
import { getUserData } from "@/actions/userActions";

import ToastContainer from '../../../components/ToastContainer';
import { allProperties } from '@/actions/propertyActions';

const HeaderMenuContent = ({ float = "" }) => {    
  const { pathname } = useLocation();  
  const dispatch = useDispatch()

  const userToken = localStorage.getItem('USER-TOKEN');
  const { user } = useSelector((state) => state.userLogin);
    
  useEffect(() => {
    if (userToken && !user) {
      getUserData(dispatch)
        .then(() => {
          console.log('Get user data successfully!')
        })
        .catch(() => {
          console.log('Error while getting data!')
        })
    }  
  }, [dispatch, userToken, user]);  

  useEffect(() => {
    allProperties(dispatch);      
  }, [dispatch])

  const API_URL = import.meta.env.VITE_NODE_BACKEND_URL;  

  if (user) {
    console.log(API_URL + user.profileImageUrl)
  }

  const home = [
    // { id: 2, name: "Home 2", routerPath: "/home-2" },
    // {
    //   id: 3,
    //   name: "Home 3",
    //   routerPath: "/home-3",
    // },
    // { id: 4, name: "Home 4", routerPath: "/home-4" },
    // { id: 5, name: "Home 5", routerPath: "/home-5" },
    // { id: 6, name: "Home 6", routerPath: "/home-6" },
    // { id: 7, name: "Home 7", routerPath: "/home-7" },
    // { id: 8, name: "Home 8", routerPath: "/home-8" },
    // { id: 9, name: "Home 9", routerPath: "/home-9" },
    // { id: 10, name: "Home 10", routerPath: "/home-10" },
  ];

  const listing = [
    {
      id: 1,
      title: "Listing Grid",
      items: [
        {
          name: "Grid v1",
          routerPath: "/listing-grid-v1",
        },        
      ],
    },    
    {
      id: 5,
      title: "Agent View",
      items: [
        {
          name: "Agent V1",
          routerPath: "/agent-v1",
        },
        {
          name: "Agent V2",
          routerPath: "/agent-v2",
        },
        {
          name: "Agent Details",
          routerPath: "/agent-details/3",
        },
      ],
    },
    {
      id: 6,
      title: "Agencies View",
      items: [
        {
          name: "Agencies V1",
          routerPath: "/agency-v1",
        },
        {
          name: "Agencies V2",
          routerPath: "/agency-v2",
        },
        {
          name: "Agencies Details",
          routerPath: "/agency-details/1",
        },
      ],
    },
  ];

  const property = [
    {
      id: 1,
      title: "User Admin",
      items: [
        {
          name: "My Properties",
          routerPath: "/my-properties",
        },
        {
          name: "My Message",
          routerPath: "/my-message",
        },
        {
          name: "My Review",
          routerPath: "/my-review",
        },
        {
          name: "My Favourites",
          routerPath: "/my-favourites",
        },
        {
          name: "My Profile",
          routerPath: "/my-profile",
        },
        {
          name: "My Package",
          routerPath: "/my-package",
        },
        {
          name: "My Saved Search",
          routerPath: "/my-saved-search",
        },
        {
          name: "Add Property",
          routerPath: "/create-listing",
        },
      ],
    },
    {
      id: 2,
      title: "Listing Single",
      items: [
        {
          name: "Single V1",
          routerPath: "/listing-details-v1/3",
        },
        {
          name: "Single V2",
          routerPath: "/listing-details-v2/2",
        },
        {
          name: "Single V3",
          routerPath: "/listing-details-v3",
        },
        {
          name: "Single V4",
          routerPath: "/listing-details-v4",
        },
      ],
    },
  ];

  const blog = [
    { id: 1, name: "Blog List 1", routerPath: "/blog-list-1" },
    { id: 2, name: "Blog List 2", routerPath: "/blog-list-2" },
    { id: 3, name: "Blog List 3", routerPath: "/blog-list-3" },
    {
      id: 4,
      name: "Blog Details",
      routerPath: "/blog-details/2",
    },
  ];

  const pages = [
    { id: 1, name: "About Us", routerPath: "/about-us" },
    { id: 2, name: "Gallery", routerPath: "/gallery" },
    { id: 3, name: "Faq", routerPath: "/faq" },
    { id: 4, name: "LogIn", routerPath: "/login" },
    { id: 5, name: "Compare", routerPath: "/compare" },
    { id: 6, name: "Membership", routerPath: "/membership" },

    { id: 7, name: "Register", routerPath: "/register" },
    { id: 8, name: "Service", routerPath: "/service" },
    { id: 9, name: "404 Page", routerPath: "/404" },
    { id: 10, name: "Terms & Conditions", routerPath: "/terms" },
  ];

  return (
    <ul
      id="respMenu"
      className="ace-responsive-menu text-end d-lg-block d-none"
      data-menu-style="horizontal"
    >
      <ToastContainer />
      <li className="dropitem">
        <a
          href="#"
          className={
            home.some((page) => page.routerPath?.split('/')[1] === pathname?.split('/')[1])
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">Home</span>
          <span className="arrow"></span>
        </a>
        {/* <!-- Level Two--> */}

        <ul className="sub-menu ">
          {home.map((item) => (
            <li key={item.id}>
              <Link
                to={item.routerPath}
                className={
                  pathname?.split('/')[1] === item.routerPath?.split('/')[1] ? "ui-active" : undefined
                }
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </li>
      {/* End .dropitem */}

      <li className="dropitem">
        <a
          href="#"
          className={
            listing.some((parent) => {
              return parent.items.some(
                (page) => page.routerPath?.split('/')[1] === pathname?.split('/')[1]
              );
            })
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">Listing</span>
          <span className="arrow"></span>
        </a>
        {/* <!-- Level Two--> */}
        <ul className="sub-menu ">
          {listing.map((item) => (
            <li className="dropitem arrow" key={item.id}>
              <a
                href="#"
                className={
                  item.items.some((page) => page.routerPath?.split('/')[1] === pathname?.split('/')[1])
                    ? "ui-active"
                    : undefined
                }
              >
                {item.title}
              </a>
              {/* <!-- Level Three--> */}
              <ul className="sub-menu ">
                {item.items.map((val, i) => (
                  <li key={i}>
                    <Link
                      to={val.routerPath}
                      className={
                        pathname?.split('/')[1] === val.routerPath?.split('/')[1]
                          ? "ui-active"
                          : undefined
                      }
                    >
                      {val.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </li>
      {/* End .dropitem */}

      <li className="dropitem">
        <a
          href="#"
          className={
            property.some((parent) => {
              return parent.items.some(
                (page) =>
                  page.routerPath?.split('/')[1] === pathname?.split('/')[1] 
                  // page.routerPath?.split('/')[1] + "/[id]" === pathname?.split('/')[1]
              );
            })
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">Property</span>{" "}
          <span className="arrow"></span>
        </a>
        <ul className="sub-menu ">
          {property.map((item) => (
            <li className="dropitem arrow" key={item.id}>
              <a
                href="#"
                className={
                  item.items.some(
                    (page) =>
                      page.routerPath?.split('/')[1] === pathname?.split('/')[1] 
                      // page.routerPath?.split('/')[1] + "/[id]" === pathname?.split('/')[1]
                  )
                    ? "ui-active"
                    : undefined
                }
              >
                {item.title}
              </a>
              {/* <!-- Level Three--> */}
              <ul className="sub-menu ">
                {item.items.map((val, i) => (
                  <li key={i}>
                    <Link
                      to={val.routerPath}
                      className={
                        pathname?.split('/')[1] === val.routerPath?.split('/')[1] 
                        // val.routerPath + "/[id]" === pathname?.split('/')[1]
                          ? "ui-active"
                          : undefined
                      }
                    >
                      {val.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </li>
      {/* End .dropitem */}

      <li className="dropitem">
        <a
          href="#"
          className={
            pages.some((page) => page.routerPath?.split('/')[1] === pathname?.split('/')[1])
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">Pages</span>
          <span className="arrow"></span>
        </a>
        <ul className="sub-menu ">
          {pages.map((item) => (
            <li key={item.id}>
              <Link
                to={item.routerPath}
                className={
                  pathname?.split('/')[1] === item.routerPath?.split('/')[1] ? "ui-active" : undefined
                }
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </li>
      {/* End .dropitem */}

      <li className="dropitem">
        <a
          href="#"
          className={
            blog.some(
              (page) =>
                page.routerPath?.split('/')[1] === pathname?.split('/')[1] 
                // page.routerPath?.split('/')[1] + "/[id]" === pathname?.split('/')[1]
            )
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">Blog</span>
          <span className="arrow"></span>
        </a>
        <ul className="sub-menu ">
          {blog.map((item) => (
            <li key={item.id}>
              <Link
                to={item.routerPath}
                className={
                  pathname?.split('/')[1] === item.routerPath?.split('/')[1]
                  // item.routerPath + "/[id]" === pathname?.split('/')[1]
                    ? "ui-active"
                    : undefined
                }
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </li>
      {/* End .dropitem */}

      <li className="last">
        <Link
          to="/contact"
          className={pathname === "/contact" ? "ui-active" : undefined}
        >
          Contact
        </Link>
      </li>
      {/* End .dropitem */}

      { user === null ? (
          <li className={`list-inline-item list_s ${float}`}>
            <Link
              to="/login"
              className="btn flaticon-user"
              data-bs-toggle="modal"
              data-bs-target=".bd-example-modal-lg"
            >
              <span className="dn-lg">Login/Register</span>
            </Link>
        </li>
      ) : (
        <li className="user_setting">
          <div className="dropdown">
            <a className="btn dropdown-toggle" href="#" data-bs-toggle="dropdown">
              <img              
                className="rounded-circle"
                src={`${API_URL}${user.profileImageUrl}`}
                alt="Profile Image"
                style={{ cursor: 'pointer', width: '45px', height: '45px' }}
              />
              <span className="dn-1199 ms-1">{user.username}</span>
            </a>
            <div className="dropdown-menu">
              <MyAccount user={user} />
            </div>
          </div>
        </li>
      )}   

      {/* End .dropitem */}

      { user && user.role === "Admin" && (
        <li className={`list-inline-item add_listing ${float}`}>
         <Link to="/create-listing">
           <span className="flaticon-plus"></span>
           <span className="dn-lg"> Create Listing</span>
         </Link>
       </li>
      )}

     
      {/* End .dropitem */}
    </ul>
  );
};

export default HeaderMenuContent;
