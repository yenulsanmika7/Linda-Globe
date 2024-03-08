
import MyReview from "@/components/dashboard/my-review";

import MetaComponent from "@/components/common/MetaComponent";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const metadata = {
  title: 'My Review || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const MyReviewPage = () => {
  const navigate = useNavigate();
  const { user } = useSelector(state => state.userLogin)

  if (!user || user.role !== "Admin") {
    navigate('/')
    alert("You don't have access to Admin panel!")
  }

  return (
    <>
    <MetaComponent meta={metadata} />
      <MyReview />
    </>
  );
};

export default MyReviewPage
