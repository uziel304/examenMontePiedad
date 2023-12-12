import mongoose from "mongoose";

const materialSchema = new mongoose.Schema({
    nombre:{
        type: String,
        require:true,
        trim:true,
        unique:true
    },
    precio:{
        type: Number,
        require:true,
        trim:true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        require:true
    }
},{
    timestamps:true
})

export default mongoose.model('Material',materialSchema)