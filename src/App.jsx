import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'; 
import ScrollToTop from './ScrollToTop';
import Services from './Components/Services';
import './index.css';
import Home from './Components/Home/Home';
import Layout from './Components/Layout';
import Contact from './Components/Contact/Contact';
import Ourwork from './Components/Our_Work/Ourwork';
import Testimonials from './Components/Company/Testimonials';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* Add this line */}
      <div className="w-full">
        <Routes>
          {/* Homepage Route */}
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Ourwork" element={<Ourwork />} />
            <Route path="/Company" element={<Testimonials />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
