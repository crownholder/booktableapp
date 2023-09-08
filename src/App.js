import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { AppBar } from '@mui/material'; // Assuming you are using Material-UI
import Header from './components/Header'; // Assuming you have a Header component
import Home from './components/Home'; // Import the Home component
import BookingForm1 from './components/BookingForm'; // Import the BookingForm1 component
import Menu from './components/Menu';

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} /> 
          
          <Route path="/booking" element={<BookingForm1 />} /> 

          <Route path="/booking" element={<Menu />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
