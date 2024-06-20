const mongoose = require("mongoose");

const incomeSchema = new mongoose.Schema(
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
        date: {
            type: Date,
            default: Date.now,
        },
        description: {
            type: String,
            required: false,
            maxLength: 5,
            maxLength: 2000,
        },
        source: {
            type: String,
            required: true,
            enum: ['Salary', 'Rental Income', 'Side Hustle', 'Dividend Earned', 'Interest in Savings']
        },
    },
    {
        timestamps: true
    }
);

const Income = new mongoose.model('Income', incomeSchema);

module.exports = Income;