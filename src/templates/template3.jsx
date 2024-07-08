import { useState } from 'react'; // Import useState for managing state
import { useSelector } from 'react-redux'; // Import useSelector for accessing Redux state
import html2pdf from 'html2pdf.js'; // Import html2pdf for PDF generation
import InputField from '../components/formComponents/InputField'; // Import custom InputField component
import Person3Icon from '@mui/icons-material/Person3'; // Import icon components
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import StarHalfIcon from '@mui/icons-material/StarHalf';

const Template3 = () => {
 // Accessing information from Redux state
 const information = useSelector(state => state.information);
 // State for managing the file name of the PDF
 const [fileName, setFileName] = useState('resume'); // Default file name

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
      <div id="resume-container" className="bg-white p-4 m-4 border border-gray-300" style={{ fontSize: '14px', fontFamily: 'Lato, sans-serif', width: '100%', maxWidth: '600px' }}>
        <div> 
            {/* Profile section */}
          <div className="flex  justify-between " style={{ backgroundColor: '#ab47bc' }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
           <div style={{ textAlign: 'center', backgroundColor: '#ab47bc',  borderRadius: '10px',maxWidth: '300px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',}}>
              <img 
                src={information?.profilePhoto} 
                alt="Profile" 
                style={{ width: 'auto', minWidth: '80px', maxWidth: '80px' }}
              />
            </div>
            <div style={{ textAlign: 'center', backgroundColor: '#ce93d8', padding: '10px', borderRadius: '10px', maxWidth: '300px', whiteSpace: 'nowrap', overflow: 'hidden', maxHeight:'80px', textOverflow: 'ellipsis',marginTop:'2px',marginBottom:'2 px' }}>
              <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>
                {information?.firstName} {information?.lastName}
              </h1>
              <div style={{ fontSize: '14px', fontStyle: 'italic' }}>
                  <p><strong>Email:</strong> {information?.email}</p>
                  <p><strong>Phone:</strong> {information?.phone}</p>
                </div>
            </div>
            </div>
            
          </div>
          <hr style={{
          margin: '10px 0',
          border: 'none',  
          borderBottom: '1px solid #333', }} />

       {/* Objective section */}  
       <div className="flex ">
  <Person3Icon />

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
    <div style={{
      maxWidth: '200px',
      backgroundColor: '#ab47bc',
      padding: '10px',
      borderRadius: '10px',
      maxHeight: '50px',
      marginBottom: '10px'
    }}>
      <div style={{ width: '160px', borderRadius: '10px' }}>
        <strong style={{ marginBottom: '5px' }}>Objective</strong>
      </div>
    </div>

    <p style={{
      whiteSpace: 'pre-wrap',
      fontSize: '14px',
      fontStyle: 'italic',
      backgroundColor: '#ce93d8',
      borderRadius: '10px',
      padding: '10px',
      flex: '2',
      maxWidth: 'px', // Adjusted maxWidth to limit width
      overflow: 'hidden', // Hide overflow content
      textOverflow: 'ellipsis' // Show ellipsis for overflow
    }}>
      {information?.objective}
    </p>
  </div>
</div>


          <hr style={{
          margin: '10px 0',
          border: 'none',  
          borderBottom: '1px solid #333', }} />
      
         {/* Education section */} 
        
      <div className='flex justify-between'>
       <SchoolIcon />
       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                      
      <div style={{
        maxWidth: '200px',
        backgroundColor: '#ab47bc',
        padding: '10px',
        borderRadius: '10px',
        maxHeight: '50px',
       
      }}>
        <div style={{whiteSpace: 'pre-wrap', 
          width: '180px',
          borderRadius: '10px',justifyContent: 'space-between',
        }}>
        <strong >Education Information</strong>
        </div>
        </div> 
        <div style={{ whiteSpace: 'pre-wrap', fontSize: '14px', fontStyle: 'italic', backgroundColor: '#ce93d8' ,borderRadius: '10px',padding: '10px',
        flex: '2' }}>
        
            
          {information?.education?.map((edu, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' ,}}>
            <div style={{ fontSize: '14px', fontStyle: 'italic',width: '260px',  }}>
              <p><strong>University:</strong> {edu.university} </p>
              <p>({edu.start}-{edu.end})</p>
              <p><strong>Type:</strong>{edu.type}   
              <strong> Degree:</strong> {edu.degree}</p>
            <hr className="my-1" />
            </div>
            
          </div>
        ))}
        </div>
        </div>
      </div>

          <hr style={{
          margin: '10px 0',
          border: 'none',  
          borderBottom: '1px solid #333', }} />

       {/* Work Experience section */}
      <div className='flex justify-between'>
                <WorkIcon/>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                         
                <div style={{ maxWidth: '200px', backgroundColor: '#ab47bc',padding: '10px',borderRadius: '10px',maxHeight:'50px' }}>
                <div style={{  whiteSpace: 'pre-wrap', 
                   width: '180px',  borderRadius: '10px',justifyContent: 'space-between', }}>
                 <strong >Work Experience</strong>
                 </div>
                 </div>
                <div style={{ whiteSpace: 'pre-wrap', flex: '2' , fontSize: '14px', fontStyle: 'italic', backgroundColor: '#ce93d8', borderRadius: '10px' }}>
               
                {information?.workExperience?.map((exp, index) => (
                  <div key={index}>
                    <div style={{ fontSize: '14px', padding: '10px',fontStyle: 'italic',borderRadius: '10px', width:'270px' }}>
                    <p><strong>Organisation:</strong>{exp.organisationName}   
                     </p>
                     <p>({exp.startYear}-{exp.endYear})</p>
                    <p><strong>Job Title:</strong> {exp.jobTitle}</p>
                    
                    
                    <hr className="my-1" />
                    </div>
                  </div>
                ))}
            </div>
            </div>
            </div>

          <hr style={{
          margin: '10px 0',
          border: 'none',  
          borderBottom: '1px solid #333', }} />
        
         {/* Key Skills section */}
          <div className='flex justify-between'>
            < StarHalfIcon/>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            <div style={{ maxWidth: '200px', backgroundColor: '#ab47bc',padding: '10px',borderRadius: '10px',maxHeight:'50px', }}>
            <div style={{  width: '160px',borderRadius: '10px' }}>
              <strong >Key Skills:</strong>
              </div>
              </div>

                
              <div style={{ whiteSpace: 'pre-wrap', padding: '10px',flex: '2' , fontSize: '14px', fontStyle: 'italic', backgroundColor: '#ce93d8', borderRadius: '10px' }}>
               
                <p><strong>Skill 1:</strong> {information.skill}</p>
                <p><strong>Skill 2:</strong> {information.skill1}</p>
                <p><strong>Skill 3:</strong> {information.skill2}</p>
                <p><strong>Skill 4:</strong> {information.skill3}</p>
                
             
                {information?.skills?.map((skill, index) => (
                  <p key={index}><strong>Skill {index + 5}:</strong> {skill}</p>
                ))}
               
               
              </div>
              </div>
              </div>
        
          
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

export default Template3;
