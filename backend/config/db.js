import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('paste your mongodb connection string here').then(()=>console.log("DB Connected"));
   
}


