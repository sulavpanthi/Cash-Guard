const mongoose = require("mongoose");

const options = {discriminatorKey: 'kind'};

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        threshold: {
            type: Number,
            required: true,
        },
        description: String,
    },
    {
        timestamps: true
    },
    options
);

const Category = mongoose.model("Category", categorySchema);

const CustomCategory = Category.discriminator(
    "CustomCategory",
    new mongoose.Schema({
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
    },
    {
        timestamps: true
    },
    options
));

module.exports = { Category, CustomCategory };
