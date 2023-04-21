const express = require("express");
const cors =require("cors");
const dotenv =require("dotenv");
const paymentRoutes=require("./routes/payment");


const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

app.use("/api/payment/",paymentRoutes);

app.listen("5001", () => {
    console.log("backend is running");
  });