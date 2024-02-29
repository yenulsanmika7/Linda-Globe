
import OTP from "@/components/otp";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'OTP Verification | LindaGlobe',
  description:
    'FindHouse - Real Estate React Template',
}

const OTPVerificationPage = () => {
  return (
    <>
    <MetaComponent meta={metadata} />
      <OTP />
    </>
  );
};

export default OTPVerificationPage
