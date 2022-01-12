const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB Connected....");
  } catch (err) {
    console.log(err.message);
    //Exit process with Faliure
    process.exit(1);
  }
};

module.exports = connectDB;
