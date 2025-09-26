const app = require("express")();
const { connectToDatabase } = require("./database/database");
// Database connection function call
connectToDatabase();
// const mongoose = require("mongoose");

// Connect to MongoDB
// mongoose
//   .connect(
//     "mongodb+srv://CMS:CMS@cluster0.5cgz7xs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
//   )
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error("MongoDB connection error:", err));

app.get("/", (req, res) => {
  res.json({
    status: "ok",
    message: "Server is running",
  });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
