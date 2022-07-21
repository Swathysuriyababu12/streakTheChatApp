const mongoose = require("mongoose");
const colors = require("colors");
require("dotenv").config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;

// const mongoose = require("mongoose");

// exports.connectDB = () => {
//   mongoose
//     .connect(`${process.env.MONGO_URI}`)
//     .then(() => {
//       console.log("Connection established...");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
