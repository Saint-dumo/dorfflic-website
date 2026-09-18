import db from "../database/database.js";

function trackingRoute(req, res) {
  const trackingNumber = req.url
    .split("/api/track/")[1]
    ?.split("?")[0]
    .toUpperCase();

  if (!trackingNumber) {
    res.writeHead(400, {
      "Content-Type": "application/json",
    });

    res.end(
      JSON.stringify({
        status: "error",
        message: "Tracking number is required",
      })
    );

    return;
  }

  const shipment = db.prepare(`
    SELECT
      s.id,
      s.tracking_number,
      s.carrier,
      s.external_tracking_number,

      s.status,
      s.current_location,
      s.updated_at,

      s.cod,
      s.cod_amount,
      s.payment_status,

      c.name AS customer_name,
      c.phone AS customer_phone,

      r.name AS rider_name,
      r.phone AS rider_phone

    FROM shipments s

    LEFT JOIN customers c
      ON s.customer_id = c.id

    LEFT JOIN riders r
      ON s.rider_id = r.id

    WHERE s.tracking_number = ?
  `).get(trackingNumber);

  if (!shipment) {
    res.writeHead(404, {
      "Content-Type": "application/json",
    });

    res.end(
      JSON.stringify({
        status: "error",
        message: "Tracking number not found",
      })
    );

    return;
  }

  const events = db.prepare(`
    SELECT
      status,
      location,
      description,
      created_at AS createdAt
    FROM tracking_events
    WHERE shipment_id = ?
    ORDER BY created_at ASC
  `).all(shipment.id);

  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(
    JSON.stringify({
      status: "success",

      parcel: {
        trackingNumber: shipment.tracking_number,
        carrier: shipment.carrier,
        externalTrackingNumber:
          shipment.external_tracking_number,

        status: shipment.status,
        location: shipment.current_location,
        lastUpdated: shipment.updated_at,

        customer: {
          name: shipment.customer_name,
          phone: shipment.customer_phone,
        },

        rider: shipment.rider_name,
        phone: shipment.rider_phone,

        payment: {
          cod: Boolean(shipment.cod),
          codAmount: shipment.cod_amount,
          status: shipment.payment_status,
        },

        trackingHistory: events,
      },
    })
  );
}

export default trackingRoute;