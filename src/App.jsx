import React from "react";
import "./styles/main.scss";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/home/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
