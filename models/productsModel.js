import mongoose from "mongoose";
import rattingSchema from "./rettingsModel.js";

const productSchema = mongoose.Schema({
    name:{
            type:String,
            required:true
        
    },
    image:{
        type:String,
        required:true
    
},
category:{
    type:String,
    required:true

},
description:{
    type:String,
    required:true

},
    price:{
            type:Number,
            required:true
        
    },
    Oldprice:{
            type:Number,
            required:true
        
    },
    countInstock:{
            type:Number,
            required:true
        
    },
    retting:{
         type:Number,
            required:true,
            default:0
        
    },
    rettings:[rattingSchema]
    

})

const Product = mongoose.model('products', productSchema)
export default Product 