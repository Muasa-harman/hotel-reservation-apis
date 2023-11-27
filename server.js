import { configDotenv } from "dotenv";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import roomsRoute from "./routes/rooms.js";
import hotelsRoute from "./routes/hotels.js";
import cookieParser from "cookie-parser";
configDotenv();
const app = express();
// middlewares
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.use(cookieParser())
app.use(express.json());
app.use((error, req, res, next) => {
  const errorStatus = error.status || 500;
  const errorMessage = error.message || "something went wrong";
  return res
    .status(errorStatus)
    .json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: error.stack,
    });
});

const connect = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("connected to mongoDB")
    } catch (error){
       console.log('Error connecting to mongoDB:',error)
        throw error
    };

};
mongoose.connection.on("disconnected",()=>{
    console.log("mongoDB disconnected")
    console.log("disconnected to backend")
})
connect()
app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
