import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; 
import Home from './components/Home';
import BookingForm1 from './components/BookingForm'; 
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
