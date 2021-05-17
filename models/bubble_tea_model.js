const mongoose = require("mongoose");

const bubbleSchema = mongoose.Schema({
    name: {type: String, require},
    varients: [],
    prices: [],
    category: {type: String, require},
    image: {type: String, require},
    description: {type: String, require}
}, {
    timestamps: true,
});

const bubble_tea_model = mongoose.model('drinks', bubbleSchema);

module.exports = bubble_tea_model;