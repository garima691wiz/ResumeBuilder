import Sidebar from '../components/resumeComponents/Sidebar';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import PersonalInfo from '../components/resumeComponents/PersonalInfo';
import WorkExperience from '../components/resumeComponents/WorkExperience';
import Education from '../components/resumeComponents/Education';
import KeySkills from '../components/resumeComponents/KeySkills';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState} from 'react';
import { addinformation } from "../store/slice/slice4";
import MyResume from './MyResume';
import Template1 from '../templates/template1';
import Template2 from '../templates/template2';
import Template3 from '../templates/template3';
import Template4 from '../templates/template4';
import Template5 from '../templates/template5';

const DetailsFillingPage= () => {
  const dispatch = useDispatch(); // Initializing Redux dispatch
  const [step, setStep] = useState(0); // State for current step in the form
  const [submitted, setSubmitted] = useState(false); // State to track if form has been submitted
  const selectedTemplate = useSelector((state) => state.template.selectedTemplate); // Selecting template choice from Redux state
  const [formValues, setFormValues] = useState(null); // State to store form values

   // Initial values and validation schema for each step of the form
  const initialValuesArray = [
    { 
      firstName: '', 
      lastName: '', 
      email: '', 
      phone: '', 
      city: '', 
      state: '', 
      address: '', 
      objective: '' 
    },
    { 
      workExperience: [{ jobTitle: '', organisationName: '', startYear: '', endYear: '' }]
    },
    { 
      education: [{ type: '', university: '', degree: '', start: '', end: '' }]
    },
    { 
      skill: '', 
      skill1: '', 
      skill2: '',
      skills: []
    },
  ];
   // Validation schema using Yup for each step
   const validationSchema = [
    Yup.object().shape({
      firstName: Yup.string().required('First name is required'),
      lastName: Yup.string().required('Last name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      phone: Yup.string().required('Phone number is required'),
      city: Yup.string().required('City is required'),
      state: Yup.string().required('State is required'),
      address: Yup.string().required('Address is required'),
      objective: Yup.string().required('Objective is required'),
    }),
    Yup.object().shape({
      
        workExperience: Yup.array().of(
          Yup.object().shape({
          jobTitle: Yup.string().min(3, 'Too short!').required('Job Title is required'),
          organisationName: Yup.string().min(3, 'Too short!').required('Organisation Name is required'),
          startYear: Yup.number()   .min(1900, 'Invalid start year').max(2050, 'Invalid end year').required('Start Year is required').positive('Must be a positive number').integer('Must be an integer'),
          endYear: Yup.number().min(1900, 'Invalid end year').max(2050, 'Invalid end year').required('End Year is required').positive('Must be a positive number').integer('Must be an integer').when('startYear1', (startYear, schema) => {
          return schema.min(startYear, 'End Year must be greater than Start Year');
        }),
      }),
        )
    }),
    
    Yup.object().shape({
      education: Yup.array().of(
        Yup.object().shape({
          type: Yup.string().required('Type is required'),
          university: Yup.string().required('University is required'),
          degree: Yup.string().required('Degree is required'),
          start: Yup.number().required('Start Year is required').positive('Must be a positive number').integer('Must be an integer'),
          end:  Yup.number().required('End Year is required')
          .positive('Must be a positive number')
          .integer('Must be an integer')
          .when('start', (startYear, schema) => {
            return schema.min(startYear, 'End Year must be greater than Start Year');
          }),
      })
    )
  }),
    
    Yup.object().shape({
      skill: Yup.string().min(3, 'Too short!').required('Skill is required'),
      skill1: Yup.string().min(3, 'Too short!').required('Skill is required'),
      skill2: Yup.string().min(3, 'Too short!').required('Skill is required'),
      skills: Yup.array()
        .of(Yup.string().min(3, 'Skill must be at least 3 characters long').required('Skill is required'))
        .min(1, 'At least one skill is required'),
    }),
  ];
  
  
    // Handle form submission
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    localStorage.setItem('resumeData', JSON.stringify(values));
   
    // Dispatch actions to save resume data to Redux store
    dispatch(addinformation(values));
    setFormValues(values); 
    console.log(values);
    setSubmitting(false);
    setSubmitted(true);
    resetForm({values:""}
    );
  };
 // Function to handle moving to the next step in the form
  const handleNextStep = () => {
    setStep(step + 1);
  };
   // Function to handle moving to the previous step in the form
  const handlePreviousStep = () => {
    setStep(step - 1);
  };
  
 // Rendering the form
  return (
    
      <Formik
        initialValues={initialValuesArray[step]} 
        validationSchema={validationSchema[step]}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, isValid }) => (
          <Form className="flex justify-center w-full min-h-full py-20 px-2 ">
            {!submitted && <Sidebar step={step} setStep={setStep} />}{/* Displaying sidebar unless form is submitted */}
            {submitted ? ( // Displaying selected template once form is submitted
             (() => {
              switch (selectedTemplate) {
                case 1:
                  return <Template1 resumeData={formValues} />;
                  case 2:
                    return <Template2 resumeData={formValues} />;
                  case 3:
                    return <Template3 resumeData={formValues} />;
                  case 4:
                    return <Template4 resumeData={formValues} />;
                  default:
                    return <Template5 resumeData={formValues} />;
                   }
            })()
            ) : ( // Displaying form steps if form is not submitted
              <div className="flex flex-col w-full px-4  h-fit sm:w-[635px] border-none rounded-md ">
                  {step === 0 && <PersonalInfo />} {/* Displaying PersonalInfo component at step 0 */}
              {step === 1 && <WorkExperience />} {/* Displaying WorkExperience component at step 1 */}
              {step === 2 && <Education />} {/* Displaying Education component at step 2 */}
              {step === 3 && <KeySkills />} {/* Displaying KeySkills component at step 3 */}
              {step === 4 && <MyResume />} {/* Displaying MyResume component at step 4 */}
             
                <div className="flex flex-wrap mt-0 justify-end gap-4 mb-4">
      
                  {step > 0 && (
                    <button
                      className="flex flex-col bg-white text-blue-500 py-2 px-8 rounded-md border border-blue-500 hover:bg-blue-800 focus:outline-black focus:ring focus:border-blue-300"
                      type="button"
                      onClick={handlePreviousStep}
                    >
                      Previous
                    </button>
                  )}
                  {step < validationSchema.length - 1 && (
                    <button
                      className="flex flex-col bg-white text-blue-500 py-2 px-8 rounded-md border border-blue-500 hover:bg-blue-800 focus:outline-black focus:ring focus:border-blue-300"
                      type="button"
                      onClick={handleNextStep}
                      disabled={!isValid}
                    >
                      Next
                    </button>
                  )}
                 

                  {step === validationSchema.length - 1 && (
                    <button 
                      className="text-white bg-green-500 px-4 py-1 ring-green-900 ring-1 rounded-md"
                      type="submit" 
                      disabled={!isValid || isSubmitting}
                    >
                      Submit
                    </button>
                    
                  )}
                    

                </div>
               
              </div>
              
            )}
          </Form>
        )}
      </Formik>
   
  );
};
export default DetailsFillingPage; 