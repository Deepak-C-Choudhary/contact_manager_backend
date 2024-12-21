const mongoose = require("mongoose");

const db = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/contactManager", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = db;
