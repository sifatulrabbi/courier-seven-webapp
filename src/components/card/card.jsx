import React from "react";
import Button from "../button/button";

export default function Card({ title, desc, btnLabel, onClickFnc }) {
  return (
    <div className="card">
      <h4 className="card-title">{title}</h4>
      <p className="card-desc">{desc}</p>
      <Button label={btnLabel} type="button" onClickFnc={onClickFnc} />
    </div>
  );
}
