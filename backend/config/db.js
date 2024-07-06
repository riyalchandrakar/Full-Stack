import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://riyalchandrakar:riyal7974@cluster0.9yzxmyv.mongodb.net/food-del').then(()=>console.log("DB Connected"));
   
}


