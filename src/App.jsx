import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import HrDashboard from "./pages/HrDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/hr-dashboard" element={<HrDashboard/>}/>
        <Route path="/emp-dashboard" element={<EmployeeDashboard/>}/>
      </Routes>
    </>
  );
}

export default App;
