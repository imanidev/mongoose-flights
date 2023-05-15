require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3000;
const db = mongoose.connection;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db.on("error", (err) => console.log(err.message + " is mongodb not running"));

db.on("open", () => console.log("mongo connected "));

db.on("close", () => console.log("mongo disconnected"));

setTimeout(() => {
  db.close();
}, 5000);

app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());
