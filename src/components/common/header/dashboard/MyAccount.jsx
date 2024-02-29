
import { Link,useLocation } from "react-router-dom";
import { isSinglePageActive } from "../../../../utils/daynamicNavigation";

// eslint-disable-next-line react/prop-types
const MyAccount = ({ user }) => {
  const { pathname } = useLocation()
  const profileMenuItems = [
    { id: 1, name: "My Profile", ruterPath: "/my-profile" },
    { id: 2, name: " My Message", ruterPath: "/my-message" },
    { id: 3, name: " My Favourite", ruterPath: "/my-favourites" },
    { id: 4, name: " My Package", ruterPath: "/my-package" },
    { id: 5, name: " Log out", ruterPath: "/login" },
  ];

  return (
    <>
      <div className="user_set_header">
        <img
         
          className="float-start"
          src="/assets/images/team/e1.png"
          alt="e1.png"
        />
        <p>
          <br />
          <span className="address"></span>
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
          >
            {item.name}
          </Link>
        ))}
      </div>
    </>
  );
};

export default MyAccount;
