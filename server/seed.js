import db from "./database/database.js";

// Create a test customer
const customerResult = db.prepare(`
  INSERT INTO customers (
    name,
    phone,
    email,
    type
  )
  VALUES (?, ?, ?, ?)
`).run(
  "Dorrflic Test Customer",
  "08000000000",
  "test@dorfflic.com",
  "Individual"
);

const customerId = customerResult.lastInsertRowid;

// Create a test rider
const riderResult = db.prepare(`
  INSERT INTO riders (
    name,
    phone,
    status
  )
  VALUES (?, ?, ?)
`).run(
  "Christian",
  "080X XXX XXXX",
  "Active"
);

const riderId = riderResult.lastInsertRowid;

// Create the shipment
const shipmentResult = db.prepare(`
  INSERT INTO shipments (
    tracking_number,
    carrier,
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
    ?, ?, ?, ?,
    ?, ?, ?, ?,
    ?, ?, ?, ?,
    ?, ?, ?, ?,
    ?, ?, ?,
    ?, ?
  )
`).run(
  "DOR001",
  "Dorrflic",
  customerId,
  riderId,

  "Dorrflic Test Customer",
  "08000000000",
  "15 Diffri Road",
  "Port Harcourt",

  "Test Recipient",
  "08100000000",
  "Test Delivery Address",
  "Lagos",

  1,
  5,
  "Test parcel",
  "Handle with care",

  1,
  155000,
  "PENDING",

  "IN_TRANSIT",
  "Port Harcourt"
);

const shipmentId = shipmentResult.lastInsertRowid;

// Create tracking history
const trackingEvent = db.prepare(`
  INSERT INTO tracking_events (
    shipment_id,
    status,
    location,
    description
  )
  VALUES (?, ?, ?, ?)
`);

trackingEvent.run(
  shipmentId,
  "ORDER_RECEIVED",
  "Port Harcourt",
  "Shipment received"
);

trackingEvent.run(
  shipmentId,
  "PICKED_UP",
  "Port Harcourt",
  "Parcel picked up"
);

trackingEvent.run(
  shipmentId,
  "IN_TRANSIT",
  "Port Harcourt",
  "Shipment is currently in transit"
);

console.log("Test shipment created successfully.");
console.log("Tracking Number: DOR001");