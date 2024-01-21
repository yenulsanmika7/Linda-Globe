
import HomeMain from "@/components/home-5";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Home-5 || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const HomePage5 = () => {
  return (
    <>
    <MetaComponent meta={metadata} />
      <HomeMain />
    </>
  );
};

export default HomePage5
