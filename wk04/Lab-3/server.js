require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db"); // Import the DB connection
const restaurantRoutes = require("./routes/restaurantRoutes");

const app = express(); // Move this line to the top before using app

app.use(express.json()); // Middleware for JSON parsing
app.use(restaurantRoutes); // Now use routes after initializing app

const PORT = process.env.PORT || 8085;

// Connect to MongoDB
connectDB();

app.get("/", (req, res) => {
  res.send("Welcome to the Restaurant API");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
