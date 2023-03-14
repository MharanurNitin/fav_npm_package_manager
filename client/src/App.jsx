import React from "react";
import { Routes, Route } from "react-router-dom";
import AddPackage from "./pages/AddPackage";
import LandingPage from "./pages/LandingPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/add" element={<AddPackage />} />
    </Routes>
  );
}

export default App;
