import { Link } from "react-router-dom"; // Importing Link from react-router-dom for navigation

// Importing resume images from assets folder
import Resume1 from "../assets/resume1.png";
import Resume2 from "../assets/resume2.png";
import Resume3 from "../assets/resume3.png";
import Resume4 from "../assets/resume4.png";

import { useDispatch } from 'react-redux'; // Importing useDispatch hook from react-redux for dispatching actions
import { addtemplate } from "../store/slice/template"; // Importing addtemplate action creator from Redux slice

const Home = () => {
  const dispatch = useDispatch(); // Initializing useDispatch hook to dispatch actions
  
  // Function to handle template selection
  const handleTemplateSelect = (templateId) => {
    dispatch(addtemplate(templateId)); // Dispatching addtemplate action with selected template ID
  };
  
  return (
    <div className="flex flex-wrap items-center justify-center gap-10  h-screen w-full py-30">
      
      {/* Resume Template 1 */}
      <div className="w-64 h-100 group border-black border-2">
        <div className="relative">
          <img src={Resume1} alt="resume1" />
          {/* Overlay for template actions */}
          <div className="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
            {/* Link to navigate to details page */}
            <Link to={{ pathname: "/details" }}>
              <button
                type="button"
                className="bg-blue-500 text-white py-3 px-3 rounded-md"
                onClick={() => handleTemplateSelect(1)} // Handle click to select template 1
              >
                View Template
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Resume Template 2 */}
      <div className="w-64 h-100 group border-black border-2">
        <div className="relative overflow-hidden">
          <img src={Resume2} alt="resume2" />
          <div className="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <Link to={{ pathname: "/details" }}>
              <button
                type="button"
                className="bg-blue-500 text-white py-3 px-3 rounded-md"
                onClick={() => handleTemplateSelect(2)} // Handle click to select template 2
              >
                View Template
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Resume Template 3 */}
      <div className="w-64 h-100 group border-black border-2">
        <div className="relative overflow-hidden">
          <img src={Resume3} alt="resume3" />
          <div className="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <Link to={{ pathname: "/details" }}>
              <button
                type="button"
                className="bg-blue-500 text-white py-3 px-3 rounded-md"
                onClick={() => handleTemplateSelect(3)} // Handle click to select template 3
              >
                View Template
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Resume Template 4 */}
      <div className="w-64 h-100 group border-black border-2">
        <div className="relative overflow-hidden">
          <img src={Resume4} alt="resume4" />
          <div className="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <Link to={{ pathname: "/details" }}>
              <button
                type="button"
                className="bg-blue-500 text-white py-3 px-3 rounded-md"
                onClick={() => handleTemplateSelect(4)} // Handle click to select template 4
              >
                View Template
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
