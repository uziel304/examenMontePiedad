import mongoose from "mongoose";

export const connectDB = async () =>{
    try {
        await mongoose.connect('mongodb://localhost:27017/montePiedad');
        console.log('Is Connected DB');
    } catch (error) {
        console.log(error);
    }
}
