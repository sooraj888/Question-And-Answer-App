import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link, Routes, Route, Router } from "react-router-dom";
import InputDetailsForm from "./pages/InputDetailsForm";
import Qusion from "./pages/Qusion";
import Result from "./pages/Result";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Link to="/">Qustion and Answer App</Link>
      <Routes>
        <Route path="/" element={<InputDetailsForm></InputDetailsForm>}></Route>
        <Route path="questions/:id" element={<Qusion></Qusion>}></Route>
        <Route path="result" element={<Result></Result>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
