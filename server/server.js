import http from "http";
import trackingRoute from "./routes/tracking.js";
import createParcel from "./routes/parcels.js";
import createShipment from "./routes/shipments.js";

const PORT = 5000;

const server = http.createServer((req, res) => {
  // CORS
  res.setHeader(
    "Access-Control-Allow-Origin",
    "http://localhost:5173"
  );

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS"
  );

  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type"
  );

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  // Health check
  if (req.url === "/api/health" && req.method === "GET") {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });

    res.end(
      JSON.stringify({
        status: "success",
        message: "Dorfflic backend is running",
      })
    );

    return;
  }

 // Tracking API
    if (req.method === "POST" && req.url === "/api/shipments") {
    createShipment(req, res);
    return;
    }
    if (
    req.url.startsWith("/api/track/") &&
    req.method === "GET"
    ) {
    trackingRoute(req, res);
    return;
    }

// Create Parcel API
if (
  req.url === "/api/parcels" &&
  req.method === "POST"
) {
  createParcel(req, res);
  return;
}

  // Unknown route
  res.writeHead(404, {
    "Content-Type": "application/json",
  });

  res.end(
    JSON.stringify({
      status: "error",
      message: "Route not found",
    })
  );
});

server.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});