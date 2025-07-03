import mongoose from 'mongoose';

const DoctorSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
    specialization: { type: String, required: true },

    experience: [
        {
            title: { type: String, required: true },  
            hospital: { type: String, required: true }, 
            from: { type: Date, required: true },  // Start Date
            to: { type: Date, required: false },  // End Date (null if still working)
            description: { type: String }
        }
    ],

    education: [
        {
            degree: { type: String, required: true }, 
            university: { type: String, required: true }, 
            from: { type: Date, required: true },  // Start Date
            to: { type: Date, required: false }  // End Date (null if still studying)
        }
    ],

    hospital: { type: String },  
    services: [
        {
            name: { type: String, required: true }, 
            price: { type: Number, required: true }, 
            duration: { type: Number, required: false }
        }
    ],

    availability: [
        {
            day: { type: String, required: true },  
            timeSlots: [{ type: String, required: true }] 
        }
    ],

    licenses: [
        {
            licenseNumber: { type: String, required: true },  
            issuingAuthority: { type: String, required: true },  
            issueDate: { type: Date, required: true },
            expiryDate: { type: Date, required: false }  
        }
    ],
},{
    timestamps:true
});

export default mongoose.model('Doctor', DoctorSchema);
