//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Navbars from './Components/Navbars';
import Upcoming from './Components/Upcoming';
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import React, { useState } from 'react'


import Textform from './Components/Textform';



function App() {
  return (
    <BrowserRouter>
      <Navbar/>
    <Navbars/>
    <Routes>
    <Route path="/" element={<Textform/>}/>
        <Route path="upcomingrides" element={<Upcoming/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
