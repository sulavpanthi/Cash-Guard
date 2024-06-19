const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        category_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
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
        paymentMethod: {
            type: String,
            required: true,
            enum: ['Cash', 'eSewa', 'Khalti', 'IME Pay', 'Mobile Banking']
        },
    },
    {
        timestamps: true
    }
);

const Expense = new mongoose.model('Expense', expenseSchema);

module.exports = Expense;