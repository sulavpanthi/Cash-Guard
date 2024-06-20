const mongoose = require("mongoose");

const savingGoalSchema = new mongoose.Schema(
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
        month: {
            type: String,
            required: true,
            enum: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        },
        year: {
            type: Date,
            default: Date.now
        },
        description: {
            type: String,
            required: false,
            maxLength: 5,
            maxLength: 2000,
        },
        status: {
            type: String,
            required: false,
            enum: ['Goal Achieved', 'Goal Not Achieved']
        },
    },
    {
        timestamps: true
    }
);

const SavingGoal = new mongoose.model('SavingGoal', savingGoalSchema);

module.exports = SavingGoal;