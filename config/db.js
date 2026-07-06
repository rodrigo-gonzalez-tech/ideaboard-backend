const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log(process.env.MONGO_URI);

    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(conn.connection.host);
    console.log("Connected successfully!");
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDB;
