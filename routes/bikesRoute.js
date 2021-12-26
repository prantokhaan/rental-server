const express = require("express");
const router = express.Router();
const Bike = require("../models/bikeModel");

router.get("/getAllBikes", async (req, res) => {
  try {
    const bikes = await Bike.find();
    res.send(bikes);
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/addBike", async (req, res) => {
  try {
    const newBike = new Bike(req.body);
    await newBike.save();
    res.send("Bike added successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/editBike", async (req, res) => {
  try {
    const bike = await Bike.findOne({ _id: req.body._id });
    bike.name = req.body.name;
    bike.image = req.body.image;
    bike.gvw = req.body.gvw;
    bike.rentPerHour = req.body.rentPerHour;
    bike.horsepower = req.body.horsepower;
    bike.torque = req.body.torque;
    bike.engine = req.body.engine;
    bike.body = req.body.body;
    bike.brake = req.body.brake;
    bike.fuel = req.body.fuel;

    await bike.save();

    res.send("bike details updated successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/deleteBike", async (req, res) => {
  try {
    await Bike.findOneAndDelete({ _id: req.body.bikeId });

    res.send("Bike deleted successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = router;
