import { useSelector } from 'react-redux';
import { Formik } from 'formik'; 
import Template1 from '../templates/template1';
import Template2 from '../templates/template2';
import Template3 from '../templates/template3';
import Template4 from '../templates/template4';
import Template5 from '../templates/template5';

const MyResume = () => {
  // Fetch resume data from Redux store
  const information = useSelector(state => state.information);// Accessing keySkillsInfo from Redux state
  const selectedTemplate = useSelector((state) => state.template.selectedTemplate); // Accessing selected template ID from Redux state

  // Render the selected template based on the data and template choice
  const renderTemplate = () => {
    switch (selectedTemplate) {
      case 1:
        return <Template1 resumeData={information} />; // Render Template1 with resumeData
        case 2:
          return <Template2 resumeData={information} />; // Render Template2 with resumeData
        case 3:
          return <Template3 resumeData={information} />; // Render Template3 with resumeData
        case 4:
          return <Template4 resumeData={information} />; // Render Template4 with resumeData
        default:
          return  <Template5  resumeData={information} />; 
       }
  };

  return (
    <Formik initialValues={{ information}} onSubmit={values => console.log(values)}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className="flex justify-center w-full min-h-full py-32 px-2">
          {renderTemplate()}{/* Render selected template component */}
          </form>
        
      )}
    </Formik>
  );
};

export default MyResume;
