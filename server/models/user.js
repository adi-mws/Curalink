import mongoose from 'mongoose';
import hashPassword from '../middlewares/hashPassword.js';

// Schema for handling system notifications and alerts
const NotificationSchema = new mongoose.Schema({
    title: { type: String, required: true },     // Short, descriptive title of the notification
    message: { type: String, required: true },    // Detailed content of the notification
    type: {
        type: String,
        enum: ['Appointment', 'Prescription', 'Test Report', 'Reminder', 'System', 'Other'],
        required: true
    },    // Category of notification for organizing and filtering

    // Dynamic reference to related documents based on notification type
    // For example: If type is 'Appointment', this will reference the Appointment model
    relatedId: { type: mongoose.Schema.Types.ObjectId, refPath: 'type' },

    read: { type: Boolean, default: false },     // Tracks whether user has viewed the notification
    createdAt: { type: Date, default: Date.now } // Timestamp when notification was created
});


// Main User schema for authentication and user management
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },      // User's full name
    email: { type: String, required: true, unique: true }, // Unique email for authentication

    // User profile picture not (important in the case of admin)
    pfp: {type: String, required: function() {return this.role != 'admin'}},    


    password: {
        type: String,
        required: function () {
            return this.authType === 'normal';
        }
    },
    // googleId will be taken through the google api  
    googleId: {
        type: String,
        required: function () {
            return this.authType === 'google';
        }
    },
    // Different sign in ideas
    authType: { type: String, enum: ['normal', 'google'] },
    // User type for role-based access control
    role: { type: String, enum: ['patient', 'doctor', 'admin'], required: true },

    // Array of user notifications using the NotificationSchema
    notifications: [NotificationSchema],

    timestamps: true
});


// Use the pre-save middleware for password hashing
UserSchema.pre("save", hashPassword);

// Export the User model
export default mongoose.model('User', UserSchema);
