
import HomeMain from "@/components/home-2";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Home-2 || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const HomePage2 = () => {
  return (
    <>
    <MetaComponent meta={metadata} />
      <HomeMain />
    </>
  );
};

export default HomePage2
