const express = require("express");
const mongoose = require("mongoose");
const path = require("path")
const app = express();

const routes = require("./routes");

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("client/build"));

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/project3", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Successfully connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

app.use(routes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/public/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});