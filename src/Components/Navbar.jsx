import { useState } from "react";
import { Github, Menu } from "lucide-react";
import { NavLink } from "react-router";
import heroImg from "../assets/logo.png";
import Container from "./Container";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm">
      <Container>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-3">
          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center gap-2 hover:opacity-90 transition"
          >
            <img src={heroImg} alt="Hero Logo" className="w-8 h-8" />
            <span className="text-2xl font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              HERO.IO
            </span>
          </NavLink>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent border-b-2 border-[#9F62F2]"
                    : "text-gray-700 hover:text-[#632EE3] transition font-medium"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/apps"
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent border-b-2 border-[#9F62F2]"
                    : "text-gray-700 hover:text-[#632EE3] transition font-medium"
                }
              >
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/installation"
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent border-b-2 border-[#9F62F2]"
                    : "text-gray-700 hover:text-[#632EE3] transition font-medium"
                }
              >
                Installation
              </NavLink>
            </li>
          </ul>

          {/* GitHub Button */}
          <div className="hidden md:flex">
            <a
              href="https://github.com/savecodes"
              target="_blank"
              className="flex items-center gap-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white py-2 px-4 rounded-lg hover:opacity-90 transition"
            >
              <Github className="w-5 h-5" />
              Contribute
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <ul className="flex flex-col px-6 py-4 space-y-3">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent border-b-2 border-[#9F62F2]"
                      : "text-gray-700 hover:text-[#632EE3] transition font-medium"
                  }
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/apps"
                  className={({ isActive }) =>
                    isActive
                      ? "font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent border-b-2 border-[#9F62F2]"
                      : "text-gray-700 hover:text-[#632EE3] transition font-medium"
                  }
                  onClick={() => setIsOpen(false)}
                >
                  Apps
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/installation"
                  className={({ isActive }) =>
                    isActive
                      ? "font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent border-b-2 border-[#9F62F2]"
                      : "text-gray-700 hover:text-[#632EE3] transition font-medium"
                  }
                  onClick={() => setIsOpen(false)}
                >
                  Installation
                </NavLink>
              </li>
              <li>
                <a
                  href="https://github.com/savecodes"
                  target="_blank"
                  className="flex items-center gap-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white py-2 px-4 rounded-lg justify-center"
                >
                  <Github className="w-5 h-5" />
                  Contribute
                </a>
              </li>
            </ul>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;
