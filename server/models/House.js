import { Schema } from "mongoose";

export const houseSchema = new Schema(
    {
    bedrooms: {type: Number, min: 1, max: 500, required:true},
    bathrooms: {type: Number, min: 1, max: 100, required:true},
    price: {type: Number, min: 1, max: 999999999, required: true},
    description: {type: String, maxlength: 5000, default:'this is a house'}
    }
)