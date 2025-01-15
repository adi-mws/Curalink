import mongoose from mongoose; 
const AppointmentSchema = new mongoose.Schema({
  appointmentDate: { type: Date, required: true },
  appointmentTime: { type: String, required: true },
  duration: { type: Number, required: true }, // in minutes
  patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
  service: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
  followUpDuration: { type: Number, required: false }, // in days (if applicable)
  status: { type: String, enum: ['Scheduled', 'Completed', 'Cancelled'], default: 'Scheduled' },
  treatment: {
    doctorName: { type: String },
    prescription: [
      {
        medicine: { type: String, required: true },
        dosage: { type: String },
        frequency: { type: String, required: true },
        duration: { type: String, required: true },
        instructions: { type: String, required: true }
      }
    ],
    diagnosis: { type: String, required: true },
    treatment: { type: String, required: true },
    reports: [
      {
        fileUrl: { type: String, required: true },
        description: { type: String }
      }
    ],
    recommendedTests: [
      {
        testName: { type: String, required: true },
        description: { type: String },
        instructions: { type: String },
        status: {type: String, enum: ['pending', 'completed'], default: 'pending'},
        fileUrl: {type: String}
      }
    ],
    notes: { type: String },
    createdByPatient: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Appointment = mongoose.model('Appointment', AppointmentSchema);

module.exports = Appointment;
