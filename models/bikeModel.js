const mongoose = require("mongoose");

const bikeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    gvw: { type: Number, required: true },
    fuel: { type: Number, required: true },
    horsepower: { type: Number, required: true },
    torque: { type: Number, required: true },
    engine: { type: String, required: true },
    body: { type: String, required: true },
    brake: { type: String, required: true },
    bookedTimeSlots: [
      {
        from: { type: String, required: true },
        to: { type: String, required: true },
      },
    ],

    rentPerHour: { type: Number, required: true },
  },
  { timestamps: true }
);
const bikeModel = mongoose.model("bikes", bikeSchema);
module.exports = bikeModel;
