import { useState } from "react";
import "./Trackdelivery.css";

function Trackdelivery() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingResult, setTrackingResult] = useState(null);
  const [trackingError, setTrackingError] = useState("");

    const statusLabels = {
    ORDER_RECEIVED: "Order Received",
    PICKED_UP: "Picked Up",
    IN_TRANSIT: "In Transit",
    OUT_FOR_DELIVERY: "Out for Delivery",
    DELIVERED: "Delivered",
    ON_HOLD: "On Hold",
    DELIVERY_FAILED: "Delivery Failed",
    RETURNED: "Returned",
    CANCELLED: "Cancelled",
  };

  const timelineStatuses = [
    "ORDER_RECEIVED",
    "PICKED_UP",
    "IN_TRANSIT",
    "OUT_FOR_DELIVERY",
    "DELIVERED",
  ];

  const currentStatusIndex = trackingResult
  ? timelineStatuses.indexOf(trackingResult.status)
  : -1;

  const handleTracking = async (e) => {
  e.preventDefault();

  const number = trackingNumber.trim().toUpperCase();

  if (!number) {
    setTrackingResult(null);
    setTrackingError("Please enter a tracking number.");
    return;
  }

  try {
    const response = await fetch(
      `http://localhost:5000/api/track/${number}`
    );

    const data = await response.json();

    if (!response.ok) {
      setTrackingResult(null);
      setTrackingError(data.message);
      return;
    }

    setTrackingResult(data.parcel);
    setTrackingError("");
  } catch (error) {
    console.error("Tracking request failed:", error);

    setTrackingResult(null);
    setTrackingError(
      "Unable to connect to the tracking server. Please try again."
    );
  }
};

  return (
    <section className="tracking">

      <div className="tracking-content">

        <span>TRACK YOUR DELIVERY</span>

        <h2>Know where your parcel is Every step of the way.</h2>

        <p>
          Enter your tracking number below to check the status
          of your delivery.
        </p>

        <form
          className="tracking-form"
          onSubmit={handleTracking}
        >

          <input
            type="text"
            placeholder="Enter tracking number"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
          />

          <button type="submit">
            Track
          </button>

        </form>

        {trackingError && (
          <div className="tracking-error">
            {trackingError}
          </div>
        )}

        {trackingResult && (
          <div className="tracking-result">

            <span>TRACKING RESULT</span>

            <h3>{trackingResult.trackingNumber}</h3>

            <p className="tracking-status">
              {trackingResult.status}
            </p>

            <p>
              Current location: {trackingResult.location}
            </p>

            <p>
              Last updated: {trackingResult.lastUpdated}
            </p>

          <div className="tracking-timeline">
              {timelineStatuses.map((status, index) => {
                const isCompleted = index < currentStatusIndex;
                const isActive = index === currentStatusIndex;

                return (
                  <div key={status} className="timeline-wrapper">

                    <div
                      className={`timeline-step ${
                        isCompleted
                          ? "completed"
                          : isActive
                          ? "active"
                          : ""
                      }`}
                    >
                      <span className="timeline-dot">
                        {isCompleted ? "✓" : ""}
                      </span>

                      <p>{statusLabels[status]}</p>
                    </div>

                    {index < timelineStatuses.length - 1 && (
                      <div
                        className={`timeline-line ${
                          index < currentStatusIndex
                            ? "completed-line"
                            : index === currentStatusIndex
                            ? "active-line"
                            : ""
                        }`}
                      ></div>
                    )}

                  </div>
                );
              })}
          </div>


          {trackingResult.trackingHistory &&
            trackingResult.trackingHistory.length > 0 && (
              <div className="tracking-history">

                <span>TRACKING HISTORY</span>

                <div className="history-list">
                  {trackingResult.trackingHistory.map((event, index) => (
                    <div className="history-item" key={index}>

                      <div className="history-marker"></div>

                      <div className="history-content">
                        <h4>
                          {statusLabels[event.status] || event.status}
                        </h4>

                        <p>
                          {event.description}
                        </p>

                        <small>
                          {event.location} · {event.createdAt}
                        </small>
                      </div>

                    </div>
                  ))}
                </div>

              </div>
            )}

            <div className="rider-details">

              <span>YOUR RIDER</span>

              <h4>{trackingResult.rider}</h4>

              <p>{trackingResult.phone}</p>

            </div>

          </div>
        )}

      </div>

    </section>
  );
}

export default Trackdelivery;