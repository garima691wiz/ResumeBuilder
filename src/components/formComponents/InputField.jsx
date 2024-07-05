import { useField } from "formik";
import { PropTypes } from "prop-types";

// Define the InputField component, accepting props including a label and other props
const InputField = ({ label, ...props }) => {
  // Use the useField hook to get field value and meta information
  const [field, meta] = useField(props);
  // Destructure field object to access name, value, and onChange function
  const { name, value, onChange } = field;

  return (
    <div className={`flex flex-col gap-1`}>
      {/* Container for the label and input */}
      <label
        htmlFor={name}
        className="block text-sm font-medium text-stone-600"
      >
        {label}
      </label>

      {/* Input element */}
      <input
        {...field} // Spread field object to input element
        {...props} // Spread other props to input element
        id={name}
        value={value || ''} // Ensure value is always defined
        onChange={onChange || (() => {})} // Ensure onChange is always defined
        className={`w-full px-2 sm:w-[260px] rounded-md outline-none ring-2 ring-red-400 focus:ring-2 focus:ring-red-700 ${
          meta.touched && meta.error ? "ring-red-500" : "ring-red-300"
        }`}
      />

      {/* Conditionally render validation error message */}
      {meta.touched && meta.error && (
        <div className="text-red-500 text-xs italic mt-2">{meta.error}</div>
      )}
    </div>
  );
};

// Prop types validation
InputField.propTypes = {
  label: PropTypes.string, // Label prop should be a string
};

export default InputField;
