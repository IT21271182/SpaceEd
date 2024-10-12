import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";

//Pages
import Hero from "./pages/Hero";
import Home from "./pages/Home";
import Login from "./pages/UserManagement/Login";
import Register from "./pages/UserManagement/Register";
import APOD from "./pages/APOD/APOD";
import DateRangeAPOD from "./pages/APOD/DateRangeAPOD";
import SingleDayAPOD from "./pages/APOD/SingleDayAPOD";
import Mars from "./pages/Mars/Mars"
import LatestPhotos from "./pages/Mars/LatestPhotos";
import Earth from "./pages/Earth/Earth"; 
import About from "./pages/About";
//Components
import Footer from "./components/Footer";

import { AuthProvider } from "./context/authContext";


function App() {

  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          
          <Route path="/APOD" element={<APOD />} />
          <Route path="/DateRangeAPOD" element={<DateRangeAPOD />} />
          <Route path="/SingleDayAPOD" element={ <SingleDayAPOD />}/>

          <Route path="/Mars" element={<Mars />} />
          <Route path="LatestPhotos" element={ <LatestPhotos /> } />

          <Route path="/Earth" element={<Earth />} />
        </Routes>
      </BrowserRouter>
    
      <Footer />

      </AuthProvider>
    </div>
  );
}

export default App;
