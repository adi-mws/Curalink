import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const PatientSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  gender: {
    type: String,
    enum: ['male', 'female','other'],
    required: true
  },
  dob:{
    type:Date,
    required:true
  },
  address:{
    type:String,
    required:true,
    lowercase:true,
    trim:true
  },
  email:{
    type:String,
    required:true,
    lowercase:true
  },
  phone:{
    type:String,
    required:true
  }
}, {
  timestamps: true
});

const Patient = model('Patient', PatientSchema);

export default Patient;
