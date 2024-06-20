const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        message: {
            type: String,
            required: false,
            maxLength: 5,
            maxLength: 2000,
        },
        date: {
            type: Date,
            default: Date.now
        },
        status: {
            type: String,
            required: false,
            enum: ['Seen', 'Unseen']
        },
    },
    {
        timestamps: true
    }
);

const Notification = new mongoose.model('Notification', notificationSchema);

module.exports = Notification;