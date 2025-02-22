const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const BACKEND_ID = process.env.BACKEND_ID || 0;

app.get("/api", (req, res) => {
  console.log(`Request served by backend ${BACKEND_ID}`);
  res.setHeader("Backend-ID", BACKEND_ID);
  res.json({
    clientHeaders: req.headers,
    message: `Hello from a nodejs backend ${BACKEND_ID}`,
  });
});

app.get("*", (req, res) => {
  res.json({
    message: "Not found",
    clientHeaders: req.headers,
    url: req.url,
  });
});

app.listen(PORT, () => {
  console.log(`Backend ${BACKEND_ID} listening on port ${PORT}`);
});
