import { Twitter, Youtube, Facebook } from "lucide-react";
import { NavLink } from "react-router";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-10">
      <Container>
        {/* Top Navigation Links */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-center pb-6">

          <NavLink
            to="/apps"
            className="text-gray-700 hover:text-purple-600 transition-colors duration-300"
          >
            Apps
          </NavLink>

          <NavLink
            to="/installation"
            className="text-gray-700 hover:text-purple-600 transition-colors duration-300"
          >
            Installation
          </NavLink>

          <NavLink
            to=""
            className="text-gray-700 hover:text-purple-600 transition-colors duration-300"
          >
            About Us
          </NavLink>

          <NavLink
            to=""
            className="text-gray-700 hover:text-purple-600 transition-colors duration-300"
          >
            Contact
          </NavLink>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 pb-6">
          <a
            href="#"
            aria-label="Twitter"
            className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
          >
            <Twitter className="w-6 h-6" />
          </a>
          <a
            href="#"
            aria-label="YouTube"
            className="text-gray-600 hover:text-red-500 transition-colors duration-300"
          >
            <Youtube className="w-6 h-6" />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
          >
            <Facebook className="w-6 h-6" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-gray-700">HERO Apps Ltd.</span>{" "}
            — All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;