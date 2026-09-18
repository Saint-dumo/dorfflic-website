import { DatabaseSync } from "node:sqlite";

const db = new DatabaseSync("./database/dorfflic.db");

// Enable foreign key relationships
db.exec("PRAGMA foreign_keys = ON");

// Customers
db.exec(`
  CREATE TABLE IF NOT EXISTS customers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT,
    type TEXT DEFAULT 'Individual',
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
  )
`);

// Riders
db.exec(`
  CREATE TABLE IF NOT EXISTS riders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    status TEXT DEFAULT 'Active',
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
  )
`);

// Shipments
db.exec(`
  CREATE TABLE IF NOT EXISTS shipments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    tracking_number TEXT UNIQUE NOT NULL,

    carrier TEXT DEFAULT 'Dorrflic',
    external_tracking_number TEXT,

    customer_id INTEGER,
    rider_id INTEGER,

    pickup_contact TEXT,
    pickup_phone TEXT,
    pickup_address TEXT,
    pickup_city TEXT,

    recipient_name TEXT,
    recipient_phone TEXT,
    delivery_address TEXT,
    delivery_city TEXT,

    package_count INTEGER DEFAULT 1,
    weight REAL,
    description TEXT,
    instructions TEXT,

    cod INTEGER DEFAULT 0,
    cod_amount REAL DEFAULT 0,
    payment_status TEXT DEFAULT 'PENDING',

    status TEXT DEFAULT 'ORDER_RECEIVED',
    current_location TEXT,

    created_at TEXT DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (customer_id) REFERENCES customers(id),
    FOREIGN KEY (rider_id) REFERENCES riders(id)
  )
`);

// Tracking history
db.exec(`
  CREATE TABLE IF NOT EXISTS tracking_events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,

    shipment_id INTEGER NOT NULL,

    status TEXT NOT NULL,
    location TEXT,
    description TEXT,

    created_at TEXT DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (shipment_id) REFERENCES shipments(id)
  )
`);

export default db;