
import CreateListing from "@/components/dashboard/create-listing";
import ToastContainer from '../../../components/ToastContainer';
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Create Listing || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const CreateListingPage = () => {
  return (
    <>
    <MetaComponent meta={metadata} />    
      <ToastContainer />
      <CreateListing />
    </>
  );
};

export default CreateListingPage;
