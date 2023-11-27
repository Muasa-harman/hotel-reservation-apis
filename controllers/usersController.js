import User from "../models/User.js";
import express from "express";
import { createError } from "../utils/error.js";


// UPDATE
export const updateUser = async (req, res, next) => {
  try {
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateUser);
  } catch (error) {
    next(error)
  }
};
// DELETE
export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "successfully deleted the hotel" });
  } catch (error) {
    res
      next(error)
  }
};
// GET

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    next(error)
    
  }
};
// GET ALL
export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.status(200).json(users);
  } catch (error) {
    next(error)
  }
};
export const searchUser = async (req, res, next) => {
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
