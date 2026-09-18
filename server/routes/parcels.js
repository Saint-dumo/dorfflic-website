import parcels from "../data/parcels.js";

function createParcel(req, res) {
  let body = "";

  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", () => {
    try {
      const parcelData = JSON.parse(body);

      const newParcel = {
        trackingNumber: `DOR${String(parcels.length + 1).padStart(3, "0")}`,
        status: "Order Received",
        rider: parcelData.rider,
        phone: parcelData.phone,
        location: parcelData.location,
        lastUpdated: parcelData.lastUpdated,
      };

      parcels.push(newParcel);

      res.writeHead(201, {
        "Content-Type": "application/json",
      });

      res.end(
        JSON.stringify({
          status: "success",
          message: "Parcel created successfully",
          parcel: newParcel,
        })
      );
    } catch (error) {
      res.writeHead(400, {
        "Content-Type": "application/json",
      });

      res.end(
        JSON.stringify({
          status: "error",
          message: "Invalid parcel data",
        })
      );
    }
  });
}

export default createParcel;