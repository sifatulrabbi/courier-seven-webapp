import React from "react";
import { CreateParcelForm } from "../../components";

export default function Parcels() {
  return (
    <div className="create-parcel-page">
      <header className="page-header">
        <h3 className="page-title">
          <span className="colored">Create</span> parcel
        </h3>
      </header>
      <main className="page-main">
        <CreateParcelForm />
      </main>
    </div>
  );
}
