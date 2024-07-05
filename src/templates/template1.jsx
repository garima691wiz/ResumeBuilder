import { useState } from 'react';
import { useSelector } from 'react-redux';
import html2pdf from 'html2pdf.js';
import InputField from '../components/formComponents/InputField';
import Person3Icon from '@mui/icons-material/Person3';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import StarHalfIcon from '@mui/icons-material/StarHalf';

const Template1 = () => {
    // Get key skills info from Redux store
  const information = useSelector(state => state.information);
  const [fileName, setFileName] = useState('resume'); // Default file name

   // Function to handle downloading PDF
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
// Function to handle file name input change
  const handleFileNameChange = (e) => {
    setFileName(e.target.value);
  };

  return (
    <div className="flex justify-center w-full min-h-full px-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 "><div id="resume-container" style={{ 
       fontSize: '14px',
        fontFamily: 'Lato, sans-serif', 
        border: '5px solid #ccc', 
        padding: '10px', 
        margin: '20px',
        whiteSpace: 'nowrap', 
        overflow: 'hidden',  
        textOverflow: 'ellipsis',
        width:'600px', 
        
      }}>
        <div> 
          {/* Name and Objective */}
          <div className="flex  justify-between bg-gray-600 w-full min-h-full py-5 px-2">
          <div style={{ maxWidth: '450px' }}>
            <h1 style={{ fontSize: '26px',fontWeight: 'bold',color:'white' }}>
            {information?.firstName} {information?.lastName}
            </h1>
            <hr className="h-2 bg-red-500  w-64" />
            <p style={{
              whiteSpace: 'pre-wrap',
              fontSize: '14px',
              fontStyle: 'italic',color:'white',
              borderRadius: '10px',
              padding: '10px',
              flex: '2' 
            }}>
            {information?.objective}
              </p>
            </div>
              {/* Profile photo */}
            <div style={{ textAlign: 'center',   borderRadius: '10px',maxWidth: '300px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',   }}>
              <img 
              src={information?.profilePhoto} 
              alt="Profile" 
              style={{ width: 'auto', minWidth: '80px', maxWidth: '80px' }} 
              />
            </div>
            

          </div>
        <hr className="h-2 bg-red-500  w-full" />

       {/* Personal Information section */}
          <div className='bg-red-500'>
          <Person3Icon></Person3Icon><strong style={{fontSize:'16px',color: 'white'}}>Personal Information:</strong>
          <hr className="h-1 bg-black  w-56" />

          
          <div style={{ flex: 1, maxWidth: '80%', marginRight: '50px', marginTop: '5px' ,fontsize: '14px'}}>
          <div className="flex">
   
          <div className="skills-container" style={{marginLeft:'10px', display: 'flex', flexWrap: 'wrap' }}>  
                <p><strong>City:</strong> {information?.city}</p>
                <p><strong>State:</strong> {information?.state}</p>
                <p style={{whiteSpace: 'pre-wrap', }} ><strong>Address:</strong> {information?.address}</p>
              </div>
               {/* Right column for email, phone */}
                <div className="skills-container" style={{marginLeft: '180px',}} >    
                <p><strong>Email:</strong> {information?.email}</p>
                <p><strong>Phone:</strong> {information?.phone}</p>
                
              </div>
            
            </div>
          </div>
          <hr style={{ margin: '10px', borderBottom: '1px solid black' }} />
          
          <div className="flex flex-wrap">
  {/* Education and Education section */}
  <div style={{ flex: 1, minWidth: '250px', }}>
  <div className="column" style={{ fontSize: '14px' }}>
      <SchoolIcon></SchoolIcon>
      <strong style={{ fontSize: '16px', color: 'white' }}>Education Information:</strong>
      <hr className="h-1 bg-black w-56" />
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap',padding: '10px', }}>
        {information?.education?.map((edu, index) => (
          <div key={index}>
            <p><strong>Type:</strong> {edu.type  }  <strong>  Degree:</strong> {edu.degree}</p>
            <p><strong>University:</strong> {edu.university}</p>
            <p><strong>Start Year:</strong> {edu.start}</p>
            <p><strong>End Year:</strong> {edu.end}</p>
            <hr className="my-2 border-t border-gray-400" />
          </div>
        ))}
      </div>
      </div>
  </div>

  {/* Right Column (Work Experience) */}
  <div style={{ flex: 1, minWidth: '250px', }}>
    <div className="column" style={{ fontSize: '14px' }}>
      <WorkIcon></WorkIcon>
      <strong style={{ fontSize: '16px', color: 'white' }}>Work Experience:</strong>
      <hr className="h-1 bg-black w-56" />
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap',padding: '10px', }}>
        {information?.workExperience?.map((exp, index) => (
          <div key={index} >
            <p><strong>Job Title:</strong> {exp.jobTitle}</p>
            <p><strong>Organisation Name:</strong> {exp.organisationName}</p>
            <p><strong>Start Year:</strong> {exp.startYear}</p>
            <p><strong>End Year:</strong> {exp.endYear}</p>
            <hr className="my-2 border-t border-gray-400" />
        
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

          <hr style={{ margin: '10px', borderBottom: '1px solid black' }} />


        <div>
          <StarHalfIcon variant="contained"></StarHalfIcon><strong style={{fontSize:'16px',color: 'white'}}>Key Skills:</strong>
          <hr className="h-1 bg-black  w-56" />

   
            <div className="skills-container" style={{ display: 'flex',marginLeft:'10px', flexWrap: 'wrap' }}>
    {/* First column for skills */}
              <div className="column" style={{ fontSize: '14px' }}>
              <p><strong>Skill 1:</strong> {information.skill}</p>
              <p><strong>Skill 2:</strong>        {information.skill1}</p>
              <p><strong>Skill 3:</strong>        {information.skill2}</p>
              <p><strong>Skill 4:</strong>        {information.skill3}</p>
              

              </div>
    {/* Second column for skills */}
              <div className="column" style={{ fontSize: '14px',marginLeft:'200px' }}>
                {information?.skills?.map((skill, index) => (
               <p key={index}><strong>Skill {index+5}:</strong> {skill}</p>
              ))}
               </div>
            </div>
          </div>

        </div>
      </div>
      <hr className="h-10 bg-gray-600" />

   
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

export default Template1;