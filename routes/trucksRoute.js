const express = require("express");
const router = express.Router();
const Truck = require("../models/truckModel");

router.get("/getAllTrucks", async (req, res) => {
  try {
    const trucks = await Truck.find();
    res.send(trucks);
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/addTruck", async (req, res) => {
  try {
    const newTruck = new Truck(req.body);
    await newTruck.save();
    res.send("Truck added successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/editTruck", async (req, res) => {
  try {
    const truck = await Truck.findOne({ _id: req.body._id });
    truck.name = req.body.name;
    truck.image = req.body.image;
    truck.gvw = req.body.gvw;
    truck.rentPerHour = req.body.rentPerHour;
    truck.horsepower = req.body.horsepower;
    truck.torque = req.body.torque;
    truck.engine = req.body.engine;
    truck.body = req.body.body;
    truck.brake = req.body.brake;
    truck.fuel = req.body.fuel;

    await truck.save();

    res.send("Truck details updated successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/deleteTruck", async (req, res) => {
  try {
    await Truck.findOneAndDelete({ _id: req.body.truckId });

    res.send("Truck deleted successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = router;
