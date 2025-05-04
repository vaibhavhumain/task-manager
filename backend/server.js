const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const taskRoutes = require("./routes/tasks");

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/tasks", taskRoutes);



mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.listen(5000, () => console.log("Server started on port 5000"));
