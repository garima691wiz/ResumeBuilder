import { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import PropTypes from 'prop-types';

const Sidebar = ({ setStep }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to manage mobile menu visibility

    // Function to toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to handle step change
  const handleStepChange = (index) => {
    setStep(index);
  };

  return (
    <aside className="sidebar sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/6 p-">
       {/* Button to toggle mobile menu (visible only on small screens) */}
     <div className="sm:hidden">
        <button
          type="button"
          onClick={toggleMobileMenu}
          className="shadow-lg block px-4 py-2 hover:shadow-md text-center hover:underline"
        >
          <MenuOpenIcon />
        </button>
      </div>

      {/* Sidebar menu */}
      <ul
        className={`${
          isMobileMenuOpen ? 'block' : 'hidden'
        } sm:block px-4 py-6`}
      >
        <li>
          {/* Link to handle step change */}
          <Link
            onClick={() => handleStepChange(0)}
            className="font-bold shadow-lg block px-4 py-2 mb-4 hover:shadow-md text-center hover:underline"
            style={{ borderBottom: '15px solid transparent' }}
          >
            Personal Info
          </Link>
        </li>
        <li>
          <Link
            onClick={() => handleStepChange(1)}
            className="font-bold shadow-lg mb-4 block px-4 py-2 hover:shadow-md text-center hover:underline"
            style={{ borderBottom: '15px solid transparent' }}
          >
            Work Experience
          </Link>
        </li>
        <li>
          <Link
            onClick={() => handleStepChange(2)}
            className="font-bold shadow-lg mb-4 block px-4 py-2 hover:shadow-md text-center hover:underline"
            style={{ borderBottom: '15px solid transparent' }}
          >
            Education
          </Link>
        </li>
        <li>
          <Link
            onClick={() => handleStepChange(3)}
            className="font-bold shadow-lg mb-4 block px-4 py-2 hover:shadow-md text-center hover:underline"
            style={{ borderBottom: '15px solid transparent' }}
          >
            Key Skills
          </Link>
        </li>
      </ul>
    </aside>
  );
};

// PropTypes validation
Sidebar.propTypes = {
  setStep: PropTypes.func.isRequired,
};
export default Sidebar;
