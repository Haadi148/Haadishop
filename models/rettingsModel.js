import mongoose from "mongoose";

const rattingSchema = mongoose.Schema({
    userid:{
        type:String,
        required:true
    },
    ratting:{
        type:Number,
        required:true,
        default:0
    },
})

export default rattingSchema