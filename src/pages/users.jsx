import React from "react";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../components/protected-route";
import UsersDashboard from "../components/users-dashboard";

const Users = () => {
  return (
    <Container fluid style={{ paddingTop: "90px", paddingBottom: "90px" }}>
      <Routes>
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/" element={<UsersDashboard />} />
          <Route path="/profile" element={<h1>Profile</h1>} />
          <Route path="/parcels" element={<h1>Parcels</h1>} />
          <Route path="/create-parcel" element={<h1>Create parcel</h1>} />
          <Route path="/tracking" element={<h1>Tracking</h1>} />
          <Route path="/payments" element={<h1>Tracking</h1>} />
          <Route path="/logout" element={<h1>Logout</h1>} />
        </Route>
      </Routes>
    </Container>
  );
};

export default Users;
