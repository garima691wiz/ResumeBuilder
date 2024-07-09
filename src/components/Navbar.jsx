import { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Almalogo from "../assets/Alma_logo.png";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  // Function to toggle mobile menu visibility
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
  // Navigation bar container
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img className="h-8" src={Almalogo} alt="Alma Logo" />
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                Resume Templates
              </Link>
              <Link
                to="/myresume"
                className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                My Resume
              </Link>
              <Link
                to="/aboutus"
                className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                About Us
              </Link>
            </div>
          </div>

          {/* Mobile menu toggle */}
          <div className="-mr-2 flex sm:hidden">
            <button
              onClick={toggleNav}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              {/* Toggle icon based on navOpen state */}
              {navOpen ? (
                <CloseIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation menu */}
      <div className={`${navOpen ? "block" : "hidden"} sm:hidden bg-gray-800`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            onClick={toggleNav}
          >
            Resume Templates
          </Link>
          <Link
            to="/myresume"
            className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            onClick={toggleNav}
          >
            My Resume
          </Link>
          <Link
            to="/aboutus"
            className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            onClick={toggleNav}
          >
            About Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
