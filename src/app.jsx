import React from "react";
import "./styles/main.scss";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import ProtectedRoute from "./components/protected-route";
import { AuthProvider, PageLinksProvider } from "./contexts";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Login from "./pages/login";

export default function App() {
  return (
    <AuthProvider>
      <PageLinksProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<ProtectedRoute />}></Route>
        </Routes>
        <Footer />
      </PageLinksProvider>
    </AuthProvider>
  );
}
