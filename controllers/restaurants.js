import express from "express";
import mongoose from "mongoose";

import model from "../models/restaurant.model.js";

const router = express.Router();

export const getRestaurants = async (req, res) => {
    try {
        const restaurants = await model.find().sort({_id: -1})
        res.status(200).json(restaurants)
    } catch (err) {
        res.status(404).json({ message: error.message })
    }
}

export const getRestaurantsById = async (req, res) => {
    const { id } = req.params.id;
  
    try {
      const restaurant = await projectModel.findById(id);
      res.status(200).json(restaurant);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
}

export const createRestaurant = async (req, res) => {
    const restaurant = req.body
    const newRestaurant = new model({
    ...restaurant,
    createdAt: new Date().toISOString(),
    })
    try {
        await newRestaurant.save();
        res.status(201).json(newRestaurant);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

export const deleteRestaurant = async (req, res) => {
    const { id } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No Restaurant with id: ${id}`);
  
    await projectModel.findByIdAndRemove(id);
    res.status(204).json({ message: "Restaurant deleted successfully." });
}

export const updateRestaurant = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send(`No Project with id: ${id}`);
    
        const result = await model.findByIdAndUpdate(id, updatedData, options)
        res.status(204).json(result);
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}
  
export default router;

