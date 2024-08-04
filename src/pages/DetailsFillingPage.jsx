import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import PersonalInfo from '../components/resumeComponents/PersonalInfo';
import WorkExperience from '../components/resumeComponents/WorkExperience';
import Education from '../components/resumeComponents/Education';
import KeySkills from '../components/resumeComponents/KeySkills';
import MyResume from './MyResume';
import Sidebar from '../components/resumeComponents/Sidebar';
import Template1 from '../templates/template1';
import Template2 from '../templates/template2';
import Template3 from '../templates/template3';
import Template4 from '../templates/template4';
import Template5 from '../templates/template5';
import { useSelector, useDispatch } from 'react-redux';
import { addinformation } from "../store/slice/slice4";

const DetailsFillingPage = () => {
  const dispatch = useDispatch();
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const selectedTemplate = useSelector((state) => state.template.selectedTemplate);
  const [formValues, setFormValues] = useState(null);

  const initialValuesArray = [
    { firstName: '', lastName: '', email: '', phone: '', city: '', state: '', address: '', objective: '' },
    { workExperience: [{ jobTitle: '', organisationName: '', startYear: '', endYear: '' }] },
    { education: [{ type: '', university: '', degree: '', start: '', end: '' }] },
    { skill: '', skills: [] },
  ];

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
          jobTitle: Yup.string().required('Job Title is required'),
          organisationName: Yup.string().required('Organisation Name is required'),
          startYear: Yup.number()
            .min(1900, 'Invalid start year')
            .max(2050, 'Invalid end year')
            .required('Start Year is required')
            .positive('Must be a positive number')
            .integer('Must be an integer'),
          endYear: Yup.number()
            .min(1900, 'Invalid end year')
            .max(2050, 'Invalid end year')
            .required('End Year is required')
            .positive('Must be a positive number')
            .integer('Must be an integer')
            .when('startYear', (startYear, schema) => schema.min(startYear, 'End Year must be greater than Start Year')),
        })
      ).min(1, 'At least one work experience entry is required'),
    }),
    Yup.object().shape({
      education: Yup.array().of(
        Yup.object().shape({
          type: Yup.string().required('Type is required'),
          university: Yup.string().required('University is required'),
          degree: Yup.string().required('Degree is required'),
          start: Yup.number()
            .required('Start Year is required')
            .positive('Must be a positive number')
            .integer('Must be an integer'),
          end: Yup.number()
            .required('End Year is required')
            .positive('Must be a positive number')
            .integer('Must be an integer')
            .when('start', (startYear, schema) => schema.min(startYear, 'End Year must be greater than Start Year')),
        })
      ).min(1, 'At least one education entry is required'),
    }),
    Yup.object().shape({
      skill: Yup.string().required('Skill is required'),
      skills: Yup.array()
        .of(Yup.string().required('Skill is required'))
        .min(1, 'At least one skill is required'),
    }),
  ];

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    localStorage.setItem('resumeData', JSON.stringify(values));
    dispatch(addinformation(values));
    setFormValues(values);
    setSubmitting(false);
    setSubmitted(true);
    resetForm();
  };

  const handleNextStep = (validateForm, setErrors, setTouched) => {
    validateForm().then((errors) => {
      if (Object.keys(errors).length === 0) {
        setStep(step + 1);
      } else {
        setErrors(errors);
        setTouched(Object.keys(errors).reduce((acc, key) => ({ ...acc, [key]: true }), {}));
      }
    });
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  return (
    <Formik
      initialValues={initialValuesArray[step]}
      validationSchema={validationSchema[step]}
      onSubmit={handleSubmit}
    >
      {({ validateForm, setErrors, setTouched, isSubmitting, isValid, values }) => (
        <Form className="flex justify-center w-full min-h-full py-20 px-2">
          {!submitted && <Sidebar step={step} setStep={setStep} />}
          {submitted ? (
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
          ) : (
            <div className="flex flex-col w-full px-4 h-fit sm:w-[635px] border-none rounded-md">
              {step === 0 && <PersonalInfo />}
              {step === 1 && <WorkExperience />}
              {step === 2 && <Education />}
              {step === 3 && <KeySkills />}
              {step === 4 && <MyResume />}

              <div className="flex flex-wrap mt-4 justify-end gap-4 mb-4">
                {step > 0 && (
                  <button
                    className="bg-white text-blue-500 py-2 px-8 rounded-md border border-blue-500 hover:bg-blue-800 focus:outline-black focus:ring focus:border-blue-300"
                    type="button"
                    onClick={handlePreviousStep}
                  >
                    Previous
                  </button>
                )}
                {step < initialValuesArray.length - 1 && (
                  <button
                    className="bg-white text-blue-500 py-2 px-8 rounded-md border border-blue-500 hover:bg-blue-800 focus:outline-black focus:ring focus:border-blue-300"
                    type="button"
                    onClick={() => handleNextStep(validateForm, setErrors, setTouched)}
                  >
                    Next
                  </button>
                )}
                {step === initialValuesArray.length - 1 && (
                  <button
                    className="text-white bg-green-500 px-4 py-1 ring-green-900 ring-1 rounded-md"
                    type="submit"
                    disabled={isSubmitting || !isValid || (values.education?.length || 0) < 1 || (values.workExperience?.length || 0) < 1}
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
