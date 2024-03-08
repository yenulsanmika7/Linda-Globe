
import CreateListing from "@/components/dashboard/create-listing";
import ToastContainer from '../../../components/ToastContainer';
import MetaComponent from "@/components/common/MetaComponent";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const metadata = {
  title: 'Create Listing || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const CreateListingPage = () => {
  const navigate = useNavigate();
  const { user } = useSelector(state => state.userLogin)

  if (!user || user.role !== "Admin") {
    navigate('/')
    alert("You don't have access to Admin panel!")
  }

  return (
    <>
    <MetaComponent meta={metadata} />    
      <ToastContainer />
      <CreateListing />
    </>
  );
};

export default CreateListingPage;
