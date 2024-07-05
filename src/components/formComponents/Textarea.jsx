import { useField } from "formik";
import PropTypes from 'prop-types';

// Define the Textarea component, accepting props including a label and other props
const Textarea = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className='flex flex-col gap-1'>{/* Container for the label and textarea */}

      <label
        htmlFor={field.name}
        className="block text-sm font-medium text-stone-600"
      >
        {label}
      </label>
      <textarea
        id={field.name}
        {...field}
        {...props}
        className={`w-full px-2 sm:w-[600px] rounded-md outline-none ring-2 ring-red-400 focus:ring-2 focus:ring-red-700 ${
          meta.touched && meta.error ? "ring-red-500" : "ring-red-300"
        }`}
      />
      {meta.touched && meta.error &&  ( // Conditionally render validation error message
        <div className="text-red-500 text-xs italic mt-2">{meta.error}</div>
      )}
    </div>
  );
};

// Define prop types for the Textarea component
Textarea.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  };

export default Textarea;
