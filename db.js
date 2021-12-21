const mongoose = require("mongoose");
require("dotenv").config();

function connectDB(){
    mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jry2k.mongodb.net/truckLagbe`,
      { useUnifiedTopology: true, useNewUrlParser: true }
    );
    
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("Mongo DB Connection Successfull");
    });

    connection.on("error", () => {
      console.log("Mongo DB Connection Error");
    });
}
connectDB()

module.exports = mongoose;