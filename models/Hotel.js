import mongoose from "mongoose";
const {Schema} = mongoose;

const HotelSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    distance: {
        type: String,
        required:true
    },
    photos: {
        type: [String]
    },
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required:true,
        min:0,
        max:5
    },
    rooms: {
        type: [String],
    },
    cheapestPrice: {
        type: Number,
        required: true
    },
    featured: {
        type: Boolean,
        default: false,
    },
})

// module.exports = mongoose.model("Hotel", HotelSchema)
// export default  mongoose.model("Hotel", HotelSchema)
const Hotel = mongoose.model("Hotel", HotelSchema);
export default Hotel;