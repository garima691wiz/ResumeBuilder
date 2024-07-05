import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Importing the main App component
import './index.css'; // Importing the global CSS styles
import store from './store/Store.jsx'; // Importing the Redux store
import { BrowserRouter } from 'react-router-dom'; // Importing BrowserRouter for routing
import { Provider } from 'react-redux'; // Importing Provider to connect the app with the Redux store

// Creating the root element for rendering the React application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Provider makes the Redux store available to the rest of the app */}
    <Provider store={store}>
      {/* BrowserRouter enables routing in the application */}
      <BrowserRouter>
        {/* The main App component which contains the application structure */}
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
