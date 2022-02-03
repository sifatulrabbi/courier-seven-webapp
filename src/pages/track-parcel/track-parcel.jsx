import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components";
import { FaCheck } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { useTrackParcel } from "../../hooks";
import { v4 as uuid } from "uuid";

function TrackingStatus({ time, date, statusMsg, payment, complete }) {
  return (
    <div className="tracking-status">
      <div className={`time-date ${payment ? "payment" : "normal"}`}>
        {complete ? (
          <span className="icon">
            <FaCheck />
          </span>
        ) : !payment ? (
          <>
            <span className="time">{time}</span>
            <span className="date">{date}</span>
          </>
        ) : (
          <span className="icon">
            <BsThreeDots />
          </span>
        )}
      </div>
      <div className="message">
        {payment ? (
          <>
            <strong>Payment: </strong>
            <span className="text">{statusMsg}</span>
          </>
        ) : (
          <strong>{statusMsg}</strong>
        )}
      </div>
    </div>
  );
}

export default function TrackParcel() {
  const { productId, showTracking, handleProductId, startTracking, info } =
    useTrackParcel();

  return (
    <div className="page-container">
      <div className="track-parcel-page">
        <header className="page-header">
          <h3 className="page-title">
            <span className="colored">Track</span> your parcel
          </h3>
        </header>
        <form
          action="submit"
          className="track-parcel-form page-form"
          onSubmit={startTracking}
        >
          <div className="form-control">
            <label htmlFor="parcel-id" className="form-label">
              Parcel ID
            </label>
            <input
              type="text"
              required
              id="parcel-id"
              name="parcel-id"
              placeholder="Enter the parcel ID you want to track"
              value={productId}
              onChange={handleProductId}
            />
          </div>
          <Button label="Track" type="submit" big />
        </form>
        <div className="container">
          {showTracking && (
            <>
              <div className="parcel-id">
                <span className="colored">Parcel ID: </span>
                <Link to="#" className="link">
                  {info.id}
                </Link>
              </div>
              {info.status.map((status) => (
                <TrackingStatus
                  key={uuid()}
                  time={status.time}
                  date={status.date}
                  payment={status.payment}
                  complete={status.complete}
                  statusMsg={status.statusMsg}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
