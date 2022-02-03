import React from "react";
import "./styles/main.scss";
import { Route, Routes } from "react-router-dom";
import {
  Home,
  Registration,
  Login,
  UserDashboard,
  CreateParcel,
  TrackParcel,
} from "./pages";
import { Navbar, ProtectedRoute, ScrollToTop, Footer } from "./components";
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
          <Route path="/users" element={<ProtectedRoute />}>
            <Route path="/users/dashboard" element={<UserDashboard />} />
            <Route path="/users/payments" />
            <Route path="/users/create-parcel" element={<CreateParcel />} />
            <Route path="/users/track" element={<TrackParcel />} />
            <Route path="/users/profile" />
          </Route>
        </Routes>
        <Footer />
      </PageLinksProvider>
    </AuthProvider>
  );
}
