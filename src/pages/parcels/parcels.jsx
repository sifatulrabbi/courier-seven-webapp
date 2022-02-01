import React from "react";
import { useAuth } from "../../contexts";

export default function Parcels() {
  const { user } = useAuth();

  return (
    <div className="parcels-page">
      <header className="">
        <h3 className="page-title">
          <span className="colored">{user.name.first}</span> parcels
        </h3>
      </header>
      <main className="page-main">
        <ul className="parcel-list">
          <li className="parcel-list-item"></li>
        </ul>
      </main>
    </div>
  );
}
