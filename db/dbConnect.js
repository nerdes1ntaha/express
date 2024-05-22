const mongoose = require("mongoose");

const mongooseConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, { dbName: process.env.DB_NAME });
    console.log("db connected");
  } catch (error) {
    console.log("Can not connect to MongoDB", err.message);
  }
};

module.exports = {
  mongooseConnect,
};
