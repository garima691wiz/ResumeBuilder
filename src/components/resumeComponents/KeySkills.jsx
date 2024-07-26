import { FieldArray, ErrorMessage } from 'formik';
import InputField from "../formComponents/InputField";

// Define the KeySkills component
const KeySkills = () => {
  return (
   
        <div className="flex justify-center w-full min-h-full py-5 px-2">
          <div className="flex flex-col w-full px-4 space-y-4 h-fit bg-orange-200 sm:w-[635px] border-none rounded-md py-3">
            <p className="text-xl font-semibold mb-2">Key Skills</p>
            <hr className="mb-4 border-t border-gray-400" />
            <InputField label="Skill" name="skill" type="text" placeholder="Skill" />
                  
                  {/* Dynamic FieldArray for skills */}
            <FieldArray name="skills">
              {({ push, remove, form }) => (
                <div>
                  {/* Map over the skills array in form values */}
                  {form.values.skills && form.values.skills.map((skill, index) => (
                    <div key={index} className="mb-2">
                       {/* Input field for each skill */}
                      <InputField
                        label={`Skill ${index + 1}`}
                        name={`skills[${index}]`}
                        type="text"
                        placeholder="Skill"
                      /> {/* Remove button for each skill */}
                      <button
                        type="button"
                        onClick={() => remove(index)}
                        className="ml-2 text-red-500"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  {/* Button to add a new skill */}
                  <button
                    type="button"
                    onClick={() => push('')}
                    className="bg-blue-500 text-white px-3 py-1 rounded-md"
                  >
                    Add Skill
                  </button>
                </div>
              )}
            </FieldArray>
    
            <ErrorMessage name="skills" component="div" className="text-red-500" />
          </div>
        </div>
      );
    };
    
    export default KeySkills;