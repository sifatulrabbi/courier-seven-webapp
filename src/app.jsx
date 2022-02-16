import React from "react";
import "./styles/main.scss";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import Navbar from "./components/navbar";
import ProtectedRoute from "./components/protected-route";
import { AuthProvider, PageLinksProvider } from "./contexts";

export default function App() {
  return (
    <AuthProvider>
      <PageLinksProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<ProtectedRoute />}></Route>
        </Routes>
      </PageLinksProvider>
    </AuthProvider>
  );
}
