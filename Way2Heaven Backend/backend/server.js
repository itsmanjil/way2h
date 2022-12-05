const app= require('./app');

const dotenv=require('dotenv'); 

const cloudinary=require('cloudinary');
const connectDatabase=require("./database/database");

//config of path
dotenv.config({path:"backend/config/config.env"});

//Handling he uncut Expection error
process.on("uncaughtException",(err)=>{
    console.log(`Error:${err.message}`);
    console.log("Shutting down the server due to uncut Expection Error");
    process.exit(1);
});

 
//connecting the database
connectDatabase();

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,

});

const server=app.listen(process.env.PORT,()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
})


//Unhandled Promise Rejection
process.on("unhandledRejection",(err)=>{
    console.log(`Error:${err.message}`);
    console.log("Shutting down the Server due to unhandled Promise Rejection");

    server.close(()=>{
        process.exit(1);
    });
});