import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ItemSchema = new Schema({
    name:{
        type: String,
        required: true
        },

    shortDesc: {
        type: String,
        required: true
    },
    longDesc: {
        type: String,
        required: true
    },
    created_date:{
            type: Date,
            default: Date.now
    }

});