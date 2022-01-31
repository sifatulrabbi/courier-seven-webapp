import React from "react";
import "./styles/main.scss";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Navbar, Footer, ScrollToTop } from "./components";
import { Home, Registration, Login } from "./pages";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
