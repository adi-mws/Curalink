import mongoose from 'mongoose';

const ChatSchema = new mongoose.Schema({
    participants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',  // Can be Doctor or Patient
            required: true
        }
    ],
    messages: [
        {
            sender: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                required: true
            },
            receiver: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                required: true
            },
            messageType: {
                type: String,
                enum: ['text', 'image', 'file', 'video'],
                default: 'text'
            },
            content: {
                type: String,  // Text message content or file URL
                required: true
            },
            attachment: {
                fileUrl: String,  // URL of attached file (optional)
                fileType: String, // PDF, JPG, PNG, etc.
            },
            status: {
                type: String,
                enum: ['sent', 'delivered', 'seen'],
                default: 'sent'
            },
            timestamp: {
                type: Date,
                default: Date.now
            }
        }
    ],
    lastUpdated: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Chat', ChatSchema);
