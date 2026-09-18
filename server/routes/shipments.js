import db from "../database/database.js";

function generateTrackingNumber() {
  const row = db
    .prepare("SELECT COUNT(*) AS count FROM shipments")
    .get();

  const nextNumber = Number(row.count) + 1;

  return `DOR-${new Date().getFullYear()}-${String(nextNumber).padStart(6, "0")}`;
}

function createShipment(req, res) {
  let body = "";

  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", () => {
    try {
      const data = JSON.parse(body);

      // Basic validation
      if (
        !data.customerName ||
        !data.customerPhone ||
        !data.recipientName ||
        !data.recipientPhone
      ) {
        res.writeHead(400, {
          "Content-Type": "application/json",
        });

        res.end(
          JSON.stringify({
            status: "error",
            message:
              "Customer and recipient name and phone are required.",
          })
        );

        return;
      }

      // Create customer
     // Find existing customer or create a new one
        let customer = db
        .prepare(`
            SELECT id
            FROM customers
            WHERE phone = ?
            LIMIT 1
        `)
        .get(data.customerPhone);

        let customerId;

        if (customer) {
        customerId = customer.id;
        } else {
        const customerResult = db
            .prepare(`
            INSERT INTO customers (
                name,
                phone,
                email,
                type
            )
            VALUES (?, ?, ?, ?)
            `)
            .run(
            data.customerName,
            data.customerPhone,
            data.customerEmail || null,
            data.customerType || "Individual"
            );

        customerId = customerResult.lastInsertRowid;
        }


      // Create rider if one was supplied
    // Find existing rider or create a new one
        let riderId = null;

        if (data.riderName && data.riderPhone) {
        let rider = db
            .prepare(`
            SELECT id
            FROM riders
            WHERE phone = ?
            LIMIT 1
            `)
            .get(data.riderPhone);

        if (rider) {
            riderId = rider.id;
        } else {
            const riderResult = db
            .prepare(`
                INSERT INTO riders (
                name,
                phone,
                status
                )
                VALUES (?, ?, ?)
            `)
            .run(
                data.riderName,
                data.riderPhone,
                "Active"
            );

            riderId = riderResult.lastInsertRowid;
        }
        }

      // Generate tracking number
      const trackingNumber = generateTrackingNumber();

      // Create shipment
      const shipmentResult = db
        .prepare(`
          INSERT INTO shipments (
            tracking_number,
            carrier,
            external_tracking_number,

            customer_id,
            rider_id,

            pickup_contact,
            pickup_phone,
            pickup_address,
            pickup_city,

            recipient_name,
            recipient_phone,
            delivery_address,
            delivery_city,

            package_count,
            weight,
            description,
            instructions,

            cod,
            cod_amount,
            payment_status,

            status,
            current_location
          )
          VALUES (
            ?, ?, ?,
            ?, ?,
            ?, ?, ?, ?,
            ?, ?, ?, ?,
            ?, ?, ?, ?,
            ?, ?, ?,
            ?, ?
          )
        `)
        .run(
          trackingNumber,
          data.carrier || "Dorrflic",
          data.externalTrackingNumber || null,

          customerId,
          riderId,

          data.pickupContact || data.customerName,
          data.pickupPhone || data.customerPhone,
          data.pickupAddress || "",
          data.pickupCity || "",

          data.recipientName,
          data.recipientPhone,
          data.deliveryAddress || "",
          data.deliveryCity || "",

          data.packageCount || 1,
          data.weight || null,
          data.description || null,
          data.instructions || null,

          data.cod ? 1 : 0,
          data.codAmount || 0,
          data.paymentStatus || "PENDING",

          "ORDER_RECEIVED",
          data.pickupCity || ""
        );

      const shipmentId = shipmentResult.lastInsertRowid;

      // Create first tracking event
      db.prepare(`
        INSERT INTO tracking_events (
          shipment_id,
          status,
          location,
          description
        )
        VALUES (?, ?, ?, ?)
      `).run(
        shipmentId,
        "ORDER_RECEIVED",
        data.pickupCity || "",
        "Shipment received"
      );

      res.writeHead(201, {
        "Content-Type": "application/json",
      });

      res.end(
        JSON.stringify({
          status: "success",
          message: "Shipment created successfully.",
          shipment: {
            id: shipmentId,
            trackingNumber,
            carrier: data.carrier || "Dorrflic",
            status: "ORDER_RECEIVED",
          },
        })
      );
    } catch (error) {
      console.error("Create shipment error:", error);

      res.writeHead(500, {
        "Content-Type": "application/json",
      });

      res.end(
        JSON.stringify({
          status: "error",
          message: "Unable to create shipment.",
        })
      );
    }
  });
}

export default createShipment;