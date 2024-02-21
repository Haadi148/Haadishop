import express from "express";
import ConnectToDb from "./config/db.js";
import userRouts from "./routes/userRouts.js";
import productRoutes from "./routes/productRoutes.js";
import dotenv from "dotenv";




dotenv.config()
const app = express()
ConnectToDb()


const port = 5000

app.use(express.json())
app.use('/api/users/',userRouts),
app.use('/api/products/', productRoutes)




app.listen(port, ()=>{
    console.log(`server is runnig on port ${port}`);
})