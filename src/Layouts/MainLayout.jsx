import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ScrollToTop from "../Components/ScrollToTop";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <div className="flex-1">
          <Outlet />
        </div>

        <Footer />
        <ToastContainer></ToastContainer>
      </div>
    </>
  );
};

export default MainLayout;
