import React from "react";
import "./styles/main.scss";
import { Route, Routes } from "react-router-dom";
import {
  Home,
  Registration,
  Login,
  Coverage,
  UserDashboard,
  CreateParcel,
} from "./pages";
import { Navbar, ProtectedRoute, ScrollToTop } from "./components";
import { AuthProvider, PageLinksProvider } from "./contexts";

export default function App() {
  return (
    <AuthProvider>
      <PageLinksProvider>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/coverage" element={<Coverage />} />
          <Route path="/about" element={<Home />} />
          <Route path="/users" element={<ProtectedRoute />}>
            <Route path="/users/dashboard" element={<UserDashboard />} />
            <Route path="/users/payments" />
            <Route path="/users/create-parcel" element={<CreateParcel />} />
            <Route path="/users/track" />
            <Route path="/users/profile" />
          </Route>
        </Routes>
      </PageLinksProvider>
    </AuthProvider>
  );
}
