import { useState } from 'react';
import { useSelector } from 'react-redux';
import html2pdf from 'html2pdf.js';
import InputField from '../components/formComponents/InputField';
import Person3Icon from '@mui/icons-material/Person3';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import StarHalfIcon from '@mui/icons-material/StarHalf';

const Template4 = () => {
 // State for storing the custom file name for the PDF
 const [fileName, setFileName] = useState('resume');

 // Fetching  information from the Redux store
 const information = useSelector(state => state.information);

 // Function to handle PDF download
  const handleDownloadPDF = () => {
    const element = document.getElementById('resume-container');
    const opt = {
      margin: 1,
      filename: `${fileName}.pdf`, // Use the custom file name
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
       {/* Container for the resume content */}
       <div id="resume-container" className="bg-white p-4 m-4 border border-gray-300" style={{ fontSize: '14px', fontFamily: 'Lato, sans-serif', width: '100%', maxWidth: '600px' ,backgroundColor:'#004d40',color:'white',}}>
        <div> 
        {/*Personal Information */}
          <div className="flex justify-between bg-yellow-300">
            <div style={{ maxWidth: '300px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',}}>
              <h1 style={{ fontSize: '20px', fontWeight: 'bold', color:'black' }}>
                {information?.firstName} {information?.lastName}
              </h1>
              <hr className="h-2 bg-black  w-56" />

              <div style={{ fontSize: '14px', fontStyle: 'italic' ,color:'black'}}>
                  <p><strong>Email:</strong> {information?.email}</p>
                  <p><strong>Phone:</strong> {information?.phone}</p>
                </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <img 
                src={information?.profilePhoto} 
                alt="Profile" 
                style={{ width: '100px', height: 'auto', borderRadius: '50%' }} 
              />
            </div>
          </div>
          <hr className="h-2 bg-black  w-full border-b-2" />

      {/*Objective */}  
      <div className='py-2'>
        <Person3Icon variant="contained"></Person3Icon>       <strong>Objective</strong>
        <hr className="h-1 bg-yellow-300  w-56" />

        <p style={{ whiteSpace: 'pre-wrap', maxWidth: '500px', fontSize: '14px', fontStyle: 'italic',color:'white',marginLeft:'30px' }}>{information?.objective}</p>
      </div> 

      <hr style={{height:'2px',
          margin: '10px 0',
          border: 'none',  
          borderBottom: '1px solid black',marginBottom:'5px', }} />
          

          {/* Education section */}
          <div>
               < SchoolIcon ></SchoolIcon>
               <strong>Education Information:<strong/></strong>
               <hr className="h-1 bg-yellow-300  w-56" />
                  {information?.education?.map((edu, index) => (
                  <div key={index}>
                    <div style={{ fontSize: '14px', fontStyle: 'italic',marginLeft:'30px' }}>
                    <p><strong>University:</strong> {edu.university} ({edu.start}-{edu.end})</p>
                     <p><strong>Type:</strong> {edu.type}   Degree: {edu.degree}</p>
                  
                    </div>
                    <hr className="my-1"  />
                  </div>
                ))}
              </div>

          <hr style={{
          margin: '10px 0',
          border: 'none',  
          borderBottom: '1px solid black',marginBottom:'10px',marginTop:'15px' }} />

           {/* Work Experience section */}
         
          <div>
                <WorkIcon></WorkIcon> <strong>Work Experience:</strong>
                <hr className="h-1 bg-yellow-300  w-56" />
                
                {information?.workExperience?.map((exp, index) => (
                  <div key={index}>
                    <div style={{ fontSize: '14px', fontStyle: 'italic',marginLeft:'30px' }}>
                    <p><strong>Organisation Name:</strong>{exp.organisationName}    ({exp.startYear}-{exp.endYear})</p>
                    <p><strong>Job Title:</strong> {exp.jobTitle}</p>
                    <hr className="my-1" />
                    </div>
                  </div>
                ))}
            </div>

          <hr style={{
          margin: '10px 0',
          border: 'none',  
          borderBottom: '1px solid black',marginBottom:'10px',marginTop:'15px' }} />

           {/* Key Skills section */}
         
           <div style={{ fontSize: '14px', fontStyle: 'italic' }}>
                < StarHalfIcon></StarHalfIcon> <strong>Key Skills:</strong>
                <hr className="h-1 bg-yellow-300  w-56" />
                <div style={{marginLeft:'30px'}}>
                <p><strong>Skill 1:</strong> {information.skill}</p>
                <p><strong>Skill 2:</strong> {information.skill1}</p>
                <p><strong>Skill 3:</strong> {information.skill2}</p>
                <p><strong>Skill 4:</strong> {information.skill3}</p>
           
             
                {information?.skills?.map((skill, index) => (
                  <p key={index}><strong>Skill {index + 5}:</strong> {skill}</p>
                ))}</div> 
              </div>
          {/* Contact and Personal Information */}
          
        </div>
      </div>

      {/* Input field for custom file name and save button */}
      <div className="flex flex-col items-center p-6">
        <div className="border border-blue
          -500 rounded-md p-4">
          <label htmlFor="file-name">File Name:</label>
          <InputField name="filename" type="text" placeholder="Enter name" onChange={handleFileNameChange} />
            <button type="button" className="mt-4 bg-white text-blue-500 py-2 px-8 rounded-md border border-blue-500 hover:bg-blue-800 focus:outline-black focus:ring focus:border-blue-300" 
             style={{ width: 'auto', minWidth: '150px', maxWidth: '200px' }}
             onClick={handleDownloadPDF}>
            Save as PDF
            </button>
        </div>
      </div>
      </div>
  </div>
);
};

export default Template4;

