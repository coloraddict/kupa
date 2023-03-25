const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const userRoutes = require("./routes/user");

const app = express();

mongoose.set('strictQuery', true);

// Connects to MongoDB Compass
mongoose.connect("mongodb://0.0.0.0:27017/kupa-angular")
.then(() => {
  console.log("Connected to database")
})
.catch((error) => {
  console.log(error);
  console.log("Connection failed");
})

// Connects to MongoDB Atlas
// mongoose.connect("mongodb+srv://mynewuser:Nbf9rzoDhcOWNcNW@cluster0.m7zlt.mongodb.net/kupa-angular")
// .then(() => {
//   console.log("Connected to database")
// })
// .catch((error) => {
//   console.log(error);
//   console.log("Connection failed");
// })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
  next();
});

app.use("/api/user", userRoutes);

module.exports = app;
