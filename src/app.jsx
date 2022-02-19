import React from "react";
import "./styles/main.scss";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import ProtectedRoute from "./components/protected-route";
import { AuthProvider, PageLinksProvider } from "./contexts";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Login from "./pages/login";
import Register from "./pages/register";

export default function App() {
  return (
    <AuthProvider>
      <PageLinksProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register/*" element={<Register />} />
          <Route path="/users" element={<ProtectedRoute />}>
            <Route path="/users/track" element={<div />} />
            <Route path="/users/dashboard" element={<div />} />
            <Route path="/users/create-parcel" element={<div />} />
          </Route>
        </Routes>
        <Footer />
      </PageLinksProvider>
    </AuthProvider>
  );
}
