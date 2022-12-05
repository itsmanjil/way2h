const express=require('express');
const app=express();
const cookieParser=require('cookie-parser');
const cors = require("cors");


const bodyParser=require("body-parser");
const fileUpload = require("express-fileupload");

const dotenv = require('dotenv');

dotenv.config({path:"backend/config/config.env"});


const errorMiddleware=require("./middleware/error");
app.use(cors());
app.use(express.json())
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

//ROutes Import


const user = require("./routes/userRoute");





app.use("/api/v1",user);



//importing middle ware for Error
app.use(errorMiddleware);







module.exports=app;