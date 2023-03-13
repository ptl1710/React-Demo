import { Router, Routes, BrowserRouter, Route, Navigate } from 'react-router-dom';
import React from 'react';
import Login from './Login/LoginForm';
import Home from './Login/Home';
import Admin from './Login/Admin';

import Cookies from 'js-cookie';
// import { useState } from 'react';
function App() {
  return (
 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
