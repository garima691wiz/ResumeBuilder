import InputField from '../formComponents/InputField';
import {  FieldArray} from 'formik';

//component for taking education data
const Education = () => {
  return (
    <div className="flex justify-center w-full min-h-full py-5 px-2">
      <div className="flex flex-col w-full px-4 space-y-4 h-fit bg-orange-200 sm:w-[635px] border-none rounded-md py-3">
        <p className="text-xl font-semibold mb-2">Education</p>
        <hr className="mb-4 border-t border-gray-400" />
       
        {/* FieldArray component to manage dynamic list of education inputs */}
              <FieldArray name="education">
                {({ push, remove, form }) => (
                  <div>
                    {/* Map over the education array in form values */}
                    {form.values.education&& form.values.education.map((education, index) => (
                      <div key={index} className="mb-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                          {/* Input field for education type */}
                    <InputField
                      name={`education.${index}.type`}
                      type="text"
                      label="Type"
                      placeholder="Enter type"
                    />
                    {/* Input field for university name */}
                    <InputField
                      name={`education.${index}.university`}
                      type="text"
                      label="University"
                      placeholder="Enter University name"
                    />
                    {/* Input field for degree */}
                    <InputField
                      name={`education.${index}.degree`}
                      type="text"
                      label="Degree"
                      placeholder="Enter degree name"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                    {/* Input field for start year */}
                    <InputField
                      name={`education.${index}.start`}
                      type="number"
                      label="Start Year"
                      placeholder="Start Year"
                    />
                    {/* Input field for end year */}
                    <InputField
                      name={`education.${index}.end`}
                      type="number"
                      label="End Year"
                      placeholder="End Year"
                    />
                  </div>
                    {/* Button to add or remove an education entry */} 
                        <button
                          type="button"
                          onClick={() => remove(index)}
                          className="text-red-500 mt-2"
                        >
                          Remove
                        </button>
                        <hr className="my-4 border-t border-gray-400" />
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => push({ type: '', university: '', degree: '', start: '', end: '' })}
                      className="bg-blue-500 text-white px-3 py-1 rounded-md"
                    >
                      Add
                    </button>
                  </div>
                )}
              </FieldArray>
             
      </div>
    </div>
  );
};

export default Education;
