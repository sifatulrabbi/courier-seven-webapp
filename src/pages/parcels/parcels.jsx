import React from "react";
import { Link } from "react-router-dom";

export default function Parcels() {
  return (
    <div className="parcels-page page-container">
      <header className="page-header">
        <h3 className="page-title">
          Your <span className="colored">Parcels</span>
        </h3>
      </header>
      <main className="page-main">
        <div className="parcel-card">
          <div className="parcel-id">
            <Link to="/users/parcels/some_parcel_id">some_parcel_id</Link>
          </div>
          <ul className="parcel-info">
            <li>
              <span className="table-header">Customer name</span>
              <span className="table-data">Sifatul Rabbi</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
