
import MyFavourites from "@/components/dashboard/my-favourites";

import MetaComponent from "@/components/common/MetaComponent";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const metadata = {
  title: 'My Favourites || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}


const MyFavouritePage = () => {
  const navigate = useNavigate();
  const { user } = useSelector(state => state.userLogin)

  if (!user || user.role !== "Admin") {
    navigate('/');
  }

  return (
    <>
    <MetaComponent meta={metadata} />
      <MyFavourites />
    </>
  );
};

export default MyFavouritePage;
