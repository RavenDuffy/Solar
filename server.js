const express = require("express");
const path = require("path");

const PORT = process.env.port || 4002;

const app = express();
app.use(express.static(path.join(__dirname)));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(PORT);