import { useRef } from "react";
import UploadIcon from "@mui/icons-material/Upload";
import { useFormikContext, useField } from "formik";
import PropTypes from "prop-types";
// Define the Image component, accepting props including a label and other props
const Image = ({ label, ...props }) => {
  // Access the setFieldValue function from the useFormikContext hook
  const { setFieldValue } = useFormikContext();
  // Use the useField hook to get the field value and meta information
  const [field, meta] = useField(props.name);
  // Create a reference to the file input using useRef
  const fileRef = useRef(null);

  // Handle the click event to trigger the file input click
  const handleClick = () => {
    fileRef.current.click();
  };
  
  // Handle change event when a file is selected
  const handleChange = (event) => {
    const file = event.currentTarget.files[0];
    
    if (file) {
      // Read the file as a data URL
      const reader = new FileReader();
      reader.readAsDataURL(file);

      // Set the field value to the data URL when the file is loaded
      reader.onload = () => {
        setFieldValue(props.name, reader.result);
      };
    }
    console.log(file);
  };

  return (
    <div className="space-y-2">
      {/* Render the uploaded image if a valid URL is provided */}
      {field.value && typeof field.value === "string" && (
        <div className="flex items-center justify-center">
          <img
            src={field.value}
            alt="Uploaded"
            className="mt-2 rounded-lg"
            style={{ maxWidth: "120px" }}
          />
        </div>
      )}
      {/* Render the label */}
      <label className="hidden" htmlFor={props.name}>
        {label}
      </label>
      {/* Render the button to trigger file input click */}
      <div className="flex items-center justify-center">
        <button
          type="button"
          className="flex items-center justify-center h-[30px] w-[110px] px-3 py-2 text-[10px] text-white duration-[250ms] bg-blue-500 hover:bg-blue-700 ring-2 hover:ring-red-600 ring-red-400 rounded focus:outline-none focus:shadow-outline hover:scale-105"
          onClick={handleClick}
        >
          <UploadIcon className="mr-1" /> Upload Image
        </button>
        {/* Render the hidden file input */}
        <input
          type="file"
          accept="image/*"
          ref={fileRef}
          id={props.name}
          name={props.name}
          onChange={handleChange}
          className="hidden"
        />
      </div>
      
      {/* Render error message if the field is touched and has an error */}
      {meta.touched && meta.error && (
        <div className="text-sm italic text-red-500">{meta.error}</div>
      )}
    </div>
  );
};

// Define propTypes for the component
Image.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};


export default Image;
