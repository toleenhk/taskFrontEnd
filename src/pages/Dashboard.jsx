import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="  ">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Dashboard;
