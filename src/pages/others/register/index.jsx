
import SignUp from "@/components/register";

import MetaComponent from "@/components/common/MetaComponent";
import ToastContainer from '../../../components/ToastContainer';

const metadata = {
  title: 'SignUp || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const RegisterPage = () => {
  return (
    <>    
    <ToastContainer />
    <MetaComponent meta={metadata} />
      <SignUp />
    </>
  );
};

export default RegisterPage
