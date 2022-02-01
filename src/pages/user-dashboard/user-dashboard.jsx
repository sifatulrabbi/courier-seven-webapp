import React from "react";
import { Button } from "../../components";
import { useAuth } from "../../contexts";

export default function UserDashboard() {
  const { user } = useAuth();

  return (
    <div className="user-dashboard">
      <header className="page-header">
        <h2 className="title">
          Welcome <span className="colored">{user.name.first}</span>
        </h2>
      </header>
      <main className="page-main">
        <div className="card">
          <h3 className="card-title">Create your parcel</h3>
          <p className="card-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel laborum
            debitis magni dolor possimus reprehenderit aut recusandae porro.
            Accusamus excepturi animi aperiam?
          </p>
          <Button label="Create parcel" />
        </div>
        <div className="card">
          <h3 className="card-title">Track your parcels</h3>
          <p className="card-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel laborum
            debitis magni dolor possimus reprehenderit aut recusandae porro.
            Accusamus excepturi animi aperiam?
          </p>
          <Button label="Track parcels" />
        </div>
        <div className="card">
          <h3 className="card-title">Customize payment methods</h3>
          <p className="card-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel laborum
            debitis magni dolor possimus reprehenderit aut recusandae porro.
            Accusamus excepturi animi aperiam?
          </p>
          <Button label="Payment methods" />
        </div>
      </main>
    </div>
  );
}
