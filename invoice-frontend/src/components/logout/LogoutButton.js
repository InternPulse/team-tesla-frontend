import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";

const LogoutButton = () => {
  const handleLogout = (e) => {
    e.preventDefault();
    const dispatch = useDispatch();
    dispatch(logout());
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
