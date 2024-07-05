import { createSlice } from "@reduxjs/toolkit"; // Importing createSlice from Redux Toolkit

// Fetch initial state from localStorage or initialize as null
const initialState = {
  selectedTemplate: localStorage.getItem("selectedTemplate") || null,
  };

// Creating a slice for managing template state
const templateSlice = createSlice({
  name: "template", // Slice name
  initialState: initialState, // Initial state fetched from localStorage or initialized as null
  reducers: {
    // Reducer function to update selected template ID
    addtemplate(state, action) {
      const newTemplateId = action.payload; // Payload contains new template ID
      localStorage.setItem("selectedTemplate", newTemplateId); // Store new template ID in localStorage
      state.selectedTemplate = newTemplateId; // Update state with new template ID
    },
      },
});

// Extracting action creator from the slice
export const { addtemplate } = templateSlice.actions;

// Exporting reducer function from the slice
export default templateSlice.reducer;
