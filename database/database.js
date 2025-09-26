const mongoose = require("mongoose");
exports.connectToDatabase = async () => {
    // Connect to MongoDB
// jaba samma database sang connection hunna tab samma arko kam garna mildaina
  await mongoose.connect(
    "mongodb+srv://CMS:CMS@cluster0.5cgz7xs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
    console.log("MongoDB connected");
};
