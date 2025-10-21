import { NavLink } from "react-router";
import errorImg from "../assets/error-404.png"

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      <img
        src={errorImg}
        alt="404 Not Found"
        className="w-80 max-w-xs md:w-[400px] mb-8 animate-fade-in"
      />

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Oops! Page Not Found
      </h1>
      <p className="text-gray-500 text-sm sm:text-base mb-8 max-w-md">
        The page you’re looking for doesn’t exist or has been moved.
      </p>

      <NavLink
        to="/"
        className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-8 py-3 sm:px-10 sm:py-4 rounded-lg text-white text-base sm:text-lg md:text-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto max-w-xs text-center"
      >
        Back to Home
      </NavLink>
    </div>
  );
};

export default NotFound;