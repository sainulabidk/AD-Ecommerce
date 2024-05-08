import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AdminRoute = () => {
  const { currentUser } = useSelector((state) => state.user);
  return currentUser && currentUser.role === 'Admin' ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  );
};

export default AdminRoute;
