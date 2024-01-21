
import HomeMain from "@/components/home";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Home-1 || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const HomePage1 = () => {
  return (
    <>
    <MetaComponent meta={metadata} />
      <HomeMain />
    </>
  );
};

export default HomePage1
