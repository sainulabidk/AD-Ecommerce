import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import SingleProductPage from './pages/SingleProductPage';
import SignInPage from './pages/SignInPage';
import SignupPage from './pages/SignupPage';
import axios from "axios";
import Verification from './pages/Verification';
axios.defaults.withCredentials = true;
// axios.defaults.baseURL = "http://localhost:5000/api/v1";
axios.defaults.baseURL = 'https://ad-backend-1v1z.onrender.com/';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/sign-in" element={<SignInPage/>} />
      <Route path="/sign-up" element={<SignupPage/>} />
      <Route path="/product/:id" element={<SingleProductPage/>} />
      <Route path="/verify-email/:id" element={<Verification/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
