import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SingleProductPage from "./pages/SingleProductPage";
import SignInPage from "./pages/SignInPage";
import SignupPage from "./pages/SignupPage";
import axios from "axios";
import Verification from "./pages/Verification";
import AdminNavbar from "./components/AdminNavbar";
import AdminPage from "./pages/AdminPage";
import { useSelector } from "react-redux";
import AdminRoute from "./private/AdminRoute";
import AdminAddCategory from "./pages/AdminAddCategory";
import ProfilePage from "./pages/ProfilePage";
import AddProducts from "./pages/AddProducts";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:5000/api/v1";

const App = () => {
  const { currentUser } = useSelector((state) => state.user);
  const location = useLocation();
  const isAdminRoute =
    currentUser &&
    currentUser.role === "Admin" &&
    location.pathname.startsWith("/admin");

  return (
    <>
      {isAdminRoute ? <AdminNavbar /> : <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminRoute />}>
          <Route index element={<AdminPage />} />
        </Route>
        <Route path="/admin-add-category" element={<AdminRoute />}>
          <Route index element={<AdminAddCategory />} />
        </Route>
        <Route path="/admin-add-products" element={<AdminRoute />}>
          <Route index element={<AddProducts/>} />
        </Route>
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/profile" element={<ProfilePage/>} />
        <Route path="/product/:id" element={<SingleProductPage />} />
        <Route path="/verify-email/:id" element={<Verification />} />
      </Routes>
    </>
  );
};

export default App;
