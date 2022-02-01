import React from "react";
import "./styles/main.scss";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Home, Registration, Login, Coverage } from "./pages";
import ContextProviders from "./context-providers";

function App() {
  return (
    <Router>
      <ContextProviders>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/coverage" element={<Coverage />} />
          <Route path="/about" element={<Home />} />
        </Routes>
      </ContextProviders>
    </Router>
  );
}

export default App;
