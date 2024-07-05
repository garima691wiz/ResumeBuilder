import { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Almalogo from "../assets/Alma_logo.png";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div>
      {/* Desktop navigation */}
      <div className="sm:absolute sm:top-0 sm:left-0 sm:w-full sm:z-50">
        <div className="flex justify-between py-2 px-2 bg-gradient-to-b from-white to-gray-200 shadow-lg">
          <img src={Almalogo} alt="" className="h-8 " />

         {/* Desktop menu */}
          <div className="hidden display:flex;
            flex-direction: column; sm:flex gap-5 font-Times">
            <Link to="/" style={{ fontSize: '18px', fontWeight: '600' }}>Resume Templates</Link>
            <Link to="/myresume"style={{ fontSize: '18px', fontWeight: '600' }}>My Resume</Link>
            <Link to="/aboutus" style={{ fontSize: '18px', fontWeight: '600' }}>About Us</Link>
          </div>

         {/* Mobile menu toggle */}
          <div className="sm:hidden relative">
            <div onClick={toggleNav}>
              {navOpen ? <CloseIcon /> : <MenuIcon />}
            </div>
          </div>
        </div>
      </div>

       {/* Mobile navigation menu */}
      <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white to-gray-400 text-black text-3xl sm:hidden transition-all duration-300 ${navOpen ? 'translate-x-0' : '-translate-x-full'}`} style={{ zIndex: 1000 }}>
        {/* Mobile menu content */}
        <div className="flex flex-col items-center justify-center h-full">
          <Link onClick={toggleNav} to="/"  className=" text-lg shadow-lg  block px-4 py-2 hover:shadow-md text-center hover:underline"
          >Resume Templates</Link>
          <br></br>
          <Link onClick={toggleNav} to="/myresume"  className=" text-lg shadow-lg  block px-4 py-2 hover:shadow-md text-center hover:underline">My Resume</Link>
          <br></br>
          <Link onClick={toggleNav} to="/aboutus"  className=" text-lg shadow-lg  block px-4 py-2 hover:shadow-md text-center hover:underline">About Us</Link>
          <div className="absolute top-3 right-3">
            <CloseIcon onClick={toggleNav} />
          </div>
        </div>
      </div>
           {/* Overlay for closing the mobile menu */}
      <div className={`sm:hidden absolute top-0 left-0 w-full h-full bg-gray-400 opacity-25 ${navOpen ? 'block' : 'hidden'}`} style={{ zIndex: 999 }} onClick={toggleNav}></div>
    </div>
  );
};

export default Navbar;
