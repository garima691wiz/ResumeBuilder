import { useState } from 'react';
import { useSelector } from 'react-redux';
import html2pdf from 'html2pdf.js';
import InputField from '../components/formComponents/InputField';
import Person3Icon from '@mui/icons-material/Person3';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import StarHalfIcon from '@mui/icons-material/StarHalf';

const Template2 = () => {
  const information = useSelector(state => state.information);
  const [fileName, setFileName] = useState('resume');

  const handleDownloadPDF = () => {
    const element = document.getElementById('resume-container');
    const opt = {
      margin: 1,
      filename: `${fileName}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(element).set(opt).save();
  };

  const handleFileNameChange = (e) => {
    setFileName(e.target.value);
  };

  return (
    <div className="flex justify-center w-full min-h-full px-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
      <div id="resume-container" className="bg-white p-4 m-4 border border-gray-300" style={{ fontSize: '14px', fontFamily: 'Lato, sans-serif', width: '100%', maxWidth: '600px' }}>
          {/* Name and Objective */}
          <div className="flex flex-col items-center bg-gray-900 p-5 rounded-md">
            <div className="flex items-center">
              <img src={information?.profilePhoto} alt="Profile" className="w-20 h-20 rounded-full" />
              <div className="ml-4 text-white">
                <h1 className="text-xl font-bold text-orange-600">{information?.firstName} {information?.lastName}</h1>
                <hr className="border-b-2 border-orange-600 my-2" />
                <p className="italic">{information?.objective}</p>
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div className="bg-orange-600 py-4 mt-4 rounded-md text-white">
            <div className="flex items-center">
              <Person3Icon />
              <strong className="ml-2">Personal Information:</strong>
            </div>
            <hr className="my-2 border-white" />
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2">
                <p><strong>City:</strong> {information?.city}</p>
                <p><strong>State:</strong> {information?.state}</p>
                <p><strong>Address:</strong> {information?.address}</p>
              </div>
              <div className="w-full md:w-1/2 mt-4 md:mt-0">
                <p><strong>Email:</strong> {information?.email}</p>
                <p><strong>Phone:</strong> {information?.phone}</p>
              </div>
            </div>
          </div>

          <hr className="my-4 border-gray-400" />

          {/* Education Information */}
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2">
              <div className="flex items-center">
                <SchoolIcon />
                <strong className="ml-2 text-orange-600">Education Information:</strong>
              </div>
              <hr className="my-2 border-black" />
              {information?.education?.map((edu, index) => (
                <div key={index}>
                  <p><strong>Type:</strong> {edu.type} <strong>Degree:</strong> {edu.degree}</p>
                  <p><strong>University:</strong> {edu.university}</p>
                  <p><strong>Start Year:</strong> {edu.start}</p>
                  <p><strong>End Year:</strong> {edu.end}</p>
                  <hr className="my-2 border-gray-400" />
                </div>
              ))}
            </div>

            <div className="w-full md:w-1/2 mt-4 md:mt-0 md:pl-4">
              <div className="flex items-center">
                <WorkIcon />
                <strong className="ml-2 text-orange-600">Work Experience:</strong>
              </div>
              <hr className="my-2 border-black" />
              {information?.workExperience?.map((exp, index) => (
                <div key={index}>
                  <p><strong>Job Title:</strong> {exp.jobTitle}</p>
                  <p><strong>Organisation Name:</strong> {exp.organisationName}</p>
                  <p><strong>Start Year:</strong> {exp.startYear}</p>
                  <p><strong>End Year:</strong> {exp.endYear}</p>
                  <hr className="my-2 border-gray-400" />
                </div>
              ))}
            </div>
          </div>

          <hr className="my-4 border-gray-400" />

          {/* Key Skills */}
          <div>
            <div className="flex items-center">
              <StarHalfIcon />
              <strong className="ml-2 text-orange-600">Key Skills:</strong>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2">
                <p><strong>Skill 1:</strong> {information.skill}</p>
              
              </div>
              <div className="w-full md:w-1/2 mt-4 md:mt-0">
                {information?.skills?.map((skill, index) => (
                  <p key={index}><strong>Skill {index + 1}:</strong> {skill}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Input field for custom file name and save button */}
        <div className="flex flex-col items-center p-6">
          <div className="border border-blue-500 rounded-md p-4">
            <label htmlFor="file-name">File Name:</label>
            <InputField name="filename" type="text" placeholder="Enter name" onChange={handleFileNameChange} />
            <button 
              type="button" 
              className="mt-4 bg-white text-blue-500 py-2 px-8 rounded-md border border-blue-500 hover:bg-blue-800 focus:outline-black focus:ring focus:border-blue-300"
              onClick={handleDownloadPDF}
            >
              Save as PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template2;
