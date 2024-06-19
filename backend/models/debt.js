const mongoose = require("mongoose");

const debtSchema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        amount: {
            type: Number,
            required: true,
            min: 0
        },
        description: {
            type: String,
            required: false,
            maxLength: 5,
            maxLength: 2000,
        },
        isOwed: {
            type: Boolean,
            required: true
        },
        dueDate: {
            type: Date,
            default: Date.now
        },
        status: {
            type: String,
            required: true,
            enum: ['Paid Fully', 'Paid Partially', 'Unpaid']
        },
    },
    {
        timestamps: true
    }
);

const Debt = new mongoose.model('Debt', debtSchema);

module.exports = Debt;