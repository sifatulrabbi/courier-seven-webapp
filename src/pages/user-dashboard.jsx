import React from "react";
import { Button } from "../components";
import { useAuth } from "../contexts";
import { Link, useNavigate } from "react-router-dom";
import { Card } from "../components";

export default function UserDashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="user-dashboard page-container">
      <header className="page-header">
        <h2 className="title">
          Welcome <span className="colored">{user.name.first}</span>
        </h2>
      </header>
      <main className="page-main">
        <div className="card">
          <h4 className="card-title">Create your parcel</h4>
          <p className="card-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel laborum
            debitis magni dolor possimus reprehenderit aut recusandae porro.
            Accusamus excepturi animi aperiam?
          </p>
          <Button
            label="Create parcel"
            type="button"
            onClickFnc={() => navigate("/users/create-parcel")}
          />
        </div>
        <div className="card">
          <h4 className="card-title">Track your parcel</h4>
          <p className="card-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel laborum
            debitis magni dolor possimus reprehenderit aut recusandae porro.
            Accusamus excepturi animi aperiam?
          </p>
          <Button
            label="Track parcel"
            type="button"
            onClickFnc={() => navigate("/users/track")}
          />
        </div>
        <div className="card">
          <h4 className="card-title">Edit your profile</h4>
          <p className="card-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel laborum
            debitis magni dolor possimus reprehenderit aut recusandae porro.
            Accusamus excepturi animi aperiam?
          </p>
          <Button
            label="Edit profile"
            type="button"
            onClickFnc={() => navigate("/users/orifuke")}
          />
        </div>
      </main>
    </div>
  );
}
