import { ToastContainer } from 'react-toastify';

const index = () => {
  return (
    <div style={{ fontFamily: "Nunito", fontSize: '16px' }}>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce"
      />
      {/* Rest of your component */}
    </div>
  );
}

export default index