import React from 'react'
import './App.css'
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/User/Home.jsx';
import Login from './pages/User/Login.jsx';
import SignUp from './pages/User/SignUp.jsx';
import ForgetPassword from './pages/User/ForgetPassword.jsx';
import Application from './pages/User/Application.jsx';
import AboutUs from './pages/User/AboutUs.jsx';


function App() {
  

  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path="/forget-password" element={<ForgetPassword/>}/>
          <Route path="/application" element={<Application/>}/>
          <Route path="/about-us" element={<AboutUs/>}/>

        </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
