import Hotel from "../models/Hotel.js";
import express from "express";
import { createError } from "../utils/error.js";

// module.exports = {
// CREATE
export const createHotel = async (req, res,next) => {
  const newHotel = new Hotel(req.body);
  console.log("Before saving hotel", newHotel);

  try {
    const savedHotel = await newHotel.save();
    // await newHotel.save();
    console.log("After saving hotel:", savedHotel);
    res.status(200).json({ message: "hotel created successfully", savedHotel });
  } catch (error) {
    console.error("Failed to create hotel:", error.message);
    res
      .status(500)
      .json({ message: "failed to create hotel", error: error.message });
  }
};
// UPDATE
export const updateHotel = async (req, res,next) => {
  try {
    const updateHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateHotel);
  } catch (error) {
    res.status(500).json({message:'could not update the hotel',error:error.message})
  }
};
// DELETE
export const deleteHotel = async (req, res,next) => {
  try {
    await Hotel.findByIdAndDelete(
        req.params.id,
      );
      res.status(200).json({message:'successfully deleted the hotel'});

  } catch (error) {
    res.status(500).json({message:'hotel has not been deleted', error:error.message})
  }
};
// GET

export const getHotel = async (req, res,next) => {
    // const failed = true
    // if(failed) return next(createError(401, "You are not authenticated"));
  try {
    const hotel = await Hotel.findById(req.params.id)
    res.status(200).json(hotel);
  } catch (error) {
    // next(error)
    res.status(500).json({message:'could not find the hotel', error:error.message})
  }
};
// GET ALL
export const getAllHotels = async (req, res,next) => {
  try {
    const hotels = await Hotel.find().sort({ createdAt: -1 });
    res.status(200).json(hotels);
  } catch (error) {
    res.status(500).json({message:"could not find hotels", error:error.message})
  }
};
export const searchHotel = async (req, res, next) => {
  try {
    // const result = await Hotel.aggregate(
    //     [
    //         {
    //             $search: {
    //                 index: 'kemphishy',
    //                 text: {
    //                     query: req.params.key,
    //                     path: {
    //                         wildcard: '*'
    //                     }
    //                 }
    //             }
    //         }
    //     ]
    // )
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "failed to get the hotel" });
  }
};
// }
