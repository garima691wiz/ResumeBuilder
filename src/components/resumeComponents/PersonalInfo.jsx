import InputField from "../formComponents/InputField";
import Image from "../formComponents/Image";
import Textarea from "../formComponents/Textarea";

//component to take personalinformation
const PersonalInfo = () => {

  return (
    <div className="flex justify-center w-full min-h-full py-5 px-2">
      <div className="flex flex-col w-full px-4 space-y-2 h-fit bg-orange-200 sm:w-[635px] border-none rounded-md py-3">
        <p className="text-lg font-semibold mb-2">
          Personal Information
        </p>
        <hr className="mb-4 border-t border-gray-400" />

        {/* Upload Image component */}
        <div className="mb-4">
          <Image label="Upload Image" name="profilePhoto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
           {/* Input field for first name */}
           <InputField
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Enter first name"
          />
          {/* Input field for last name */}
          <InputField
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Enter last name"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {/* Input field for email */}
          <InputField
            label="Email"
            name="email"
            type="text"
            placeholder="Enter your email"
          />
          {/* Input field for phone */}
          <InputField
            label="Phone"
            name="phone"
            type="number"
            placeholder="Enter mobile number"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
         {/* Input field for city */}
         <InputField
            label="City"
            name="city"
            type="text"
            placeholder="Enter city name"
          />
          {/* Input field for state */}
          <InputField
            label="State"
            name="state"
            type="text"
            placeholder="Enter state name"
          />
        </div>
        
        <div>
        {/* Textarea for address */}
          <Textarea
            label="Address"
            name="address"
            type="text"
            placeholder="Enter your address for communication"
          />
        </div>

        <div>
        {/* Textarea for objective */}
          <Textarea
            label="Objective"
            name="objective"
            type="text"
            placeholder="Enter Objective"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
