import mongoose from 'mongoose'

const faqSchema = new mongoose.Schema({
    type:{
        type:String,
        enum:["patients","doctors","all"],
        default:"all"
    },
    question:{
        type:String,
        required:true
    },
    answer:{
        type:String,
        required: true
    }
})

export const Faq =  mongoose.model('Faq',faqSchema);