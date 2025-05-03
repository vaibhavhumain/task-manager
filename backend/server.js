const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const taskRoutes = require("./routes/tasks");
// const User = require("./models/user");

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/tasks", taskRoutes);

// app.post("/api/login", async (req, res) => {
//   const { username, password } = req.body;

//   console.log("Login attempt: ", { username, password });

//   const trimmedUsername = username.trim();
//   const trimmedPassword = password.trim();

//   const user = await User.findOne({ username: trimmedUsername, password: trimmedPassword });
  
//   console.log("User found: ", user);

//   if (user) {
//     res.json({ success: true });
//   } else {
//     res.json({ success: false, message: "Invalid username or password" });
//   }
// });

// app.post("/api/signup", async (req, res) => {
//   const { username, password } = req.body;
//   try {
//     const existingUser = await User.findOne({ username });

//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     const newUser = new User({ username, password });
//     await newUser.save();

//     res.json({ success: true });
//   } catch (error) {
//     console.error("Signup error: ", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });


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
