const mongoose = require('mongoose')

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log("Database connected successfully");
    
  } catch(error) {
    console.log("Database connection error:", err);

  }
}

module.exports = connectDB