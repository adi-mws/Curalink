import mongoose from "mongoose"

const ticketSchema = new mongoose.Schema({
    name:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        require:true
    },
    email:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        require:true
    },
    phone:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        require:true
    },
    message:{
        type:String,
        required:true
    }
},{
    timestamps:true
})