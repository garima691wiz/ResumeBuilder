
import { FieldArray } from 'formik';
import InputField from '../formComponents/InputField';

const WorkExperience = () => {
  return (
    <div className="flex justify-center w-full min-h-full py-5 px-2">
      <div className="flex flex-col w-full px-4 space-y-4 h-fit bg-orange-200 sm:w-[635px] border-none rounded-md py-3">
        <p className="text-xl font-semibold mb-2">Work Experience</p>
        <hr className="mb-4 border-t border-gray-400" />

       

        {/* Formik FieldArray for managing dynamic array of work experiences */}
        <FieldArray name="workExperience">
          {({ push, remove, form }) => (
            <div>
              {/* Mapping over each work experience item */}
              {form.values.workExperience && form.values.workExperience.map((experience, index) => (
                <div key={index} className="mb-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                    {/* Input fields for job title and organisation name */}
                    <InputField
                      name={`workExperience.${index}.jobTitle`}
                      type="text"
                      label="Job Title"
                      placeholder="Enter job title"
                    />
                    <InputField
                      name={`workExperience.${index}.organisationName`}
                      type="text"
                      label="Organisation"
                      placeholder="Enter organisation name"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                    {/* Input fields for start year and end year */}
                    <InputField
                      name={`workExperience.${index}.startYear`}
                      type="number"
                      label="Start Year"
                      placeholder="Start Year"
                    />
                    <InputField
                      name={`workExperience.${index}.endYear`}
                      type="number"
                      label="End Year"
                      placeholder="End Year"
                    />
                  </div>
                  {/* Remove button for removing a work experience entry */}
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
              {/* Add button for adding a new work experience entry */}
              <button
                type="button"
                onClick={() => push({ jobTitle: '', organisationName: '', startYear: '', endYear: '' })}
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

export default WorkExperience;
