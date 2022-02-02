import React from "react";
import { useAuth } from "../../contexts";
import { CreateParcelForm } from "../../components";

export default function Parcels() {
  const { user } = useAuth();

  return (
    <div className="create-parcel-page">
      <header className="">
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
