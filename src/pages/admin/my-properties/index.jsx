
import MyProperties from "@/components/dashboard/my-properties";

import MetaComponent from "@/components/common/MetaComponent";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const metadata = {
  title: 'My Properties || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const MyPropertiesPage = () => {
  const navigate = useNavigate();
  const { user } = useSelector(state => state.userLogin)

  if (!user || user.role !== "Admin") {
    navigate('/')
    alert("You don't have access to Admin panel!")
  }

  return (
    <>
    <MetaComponent meta={metadata} />
      <MyProperties />
    </>
  );
};

export default MyPropertiesPage;
