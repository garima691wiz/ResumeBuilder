import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import MyResume from "./pages/MyResume";
import AboutUs from "./pages/Aboutus";
import Home from './pages/Home'; 
import DetailsFillingPage from './pages/DetailsFillingPage';

import store from './store/Store'; 
import Template1 from '../src/templates/template1';
import Template2 from '../src/templates/template2';
import Template3 from '../src/templates/template3';
import Template4 from '../src/templates/template4';
import Template5 from './templates/template5';

const App = () => {
  return (
    // Provide the Redux store to the application
    <Provider store={store}>
      <div>
        {/* Include the Navbar component */}
        <Navbar />

        {/* Define the routes for the application */}
        <Routes>
          {/* Route for the details filling page */}
          <Route path='/details' element={<DetailsFillingPage />} />
          {/* Route for the home page */}
          <Route path='/' element={<Home />} />
          {/* Route for the MyResume page */}
          <Route path='/myresume' element={<MyResume />} />
          {/* Route for the About Us page */}
          <Route path='/aboutus' element={<AboutUs />} />
          {/* Routes for different resume templates */}
          <Route path='/template1' element={<Template1 />} />
          <Route path='/template2' element={<Template2 />} />
          <Route path='/template3' element={<Template3 />} />
          <Route path='/template4' element={<Template4 />} />
          <Route path='/template5' element={<Template5 />} />
         
          {/* Routes for different steps in the details filling process */}
          <Route path="/step1" element={<DetailsFillingPage step={0} />} />
          <Route path="/step2" element={<DetailsFillingPage step={1} />} />
          <Route path="/step3" element={<DetailsFillingPage step={2} />} />
          <Route path="/step4" element={<DetailsFillingPage step={3} />} />
          <Route path="/step4" element={<DetailsFillingPage step={4} />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
