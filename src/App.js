import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import MenuBar from "./Components/MenuBar";
import AllCourses from "./Views/AllCourses";
import EnrolledCourses from "./Views/EnrolledCourses";
import LoginDialog from "./Components/LoginDialog";

export default function App() {
  return (
    <div className="App">
      <MenuBar /> 
      <Routes>
        <Route path="AllCourses" element={<AllCourses />} />
        <Route path="enrolled-courses" element={<EnrolledCourses />} />
          <Route path="debug" element={<LoginDialog />}/>
      </Routes>
    </div>
  );
}