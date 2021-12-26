const express = require("express");
const router = express.Router();
const Car = require("../models/carModel");

router.get("/getAllCars", async (req, res) => {
  try {
    const cars = await Car.find();
    res.send(cars);
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/addCar", async (req, res) => {
  try {
    const newCar = new Car(req.body);
    await newCar.save();
    res.send("Car added successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/editCar", async (req, res) => {
  try {
    const car = await Car.findOne({ _id: req.body._id });
    car.name = req.body.name;
    car.image = req.body.image;
    car.gvw = req.body.gvw;
    car.rentPerHour = req.body.rentPerHour;
    car.horsepower = req.body.horsepower;
    car.torque = req.body.torque;
    car.engine = req.body.engine;
    car.body = req.body.body;
    car.brake = req.body.brake;
    car.fuel = req.body.fuel;

    await car.save();

    res.send("car details updated successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/deleteCar", async (req, res) => {
  try {
    await Car.findOneAndDelete({ _id: req.body.carId });

    res.send("car deleted successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = router;
