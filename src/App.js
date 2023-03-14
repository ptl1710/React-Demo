import { Router, Routes, BrowserRouter, Route, Navigate } from 'react-router-dom';
import React from 'react';
import Login from './Login/LoginForm';
import Home from './Home/Home';
import Admin from './Admin/Admin';
import Profile from './Profile/Profile';
import Cookies from 'js-cookie';
// import { useState } from 'react';
function App() {
  const isLoggedIn = Cookies.get('isLoggedIn');
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={isLoggedIn === 'true'?<Admin />:<Login/>} />
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
