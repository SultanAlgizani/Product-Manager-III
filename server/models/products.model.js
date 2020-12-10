const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "title is required!"],
        // minlength: [10, "Setup must be 10 characters or longer!"]
    },
    price: {
        type: Number,
        required: [true, "price is required!"],
        // minlength: [3, "Punchline must be 3 characters or longer!"]
    },
    description: {
        type: String,
        required: [true, "description is required!"],
        // minlength: [10, "Setup must be 10 characters or longer!"]
    }
}, {timestamps: true});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;