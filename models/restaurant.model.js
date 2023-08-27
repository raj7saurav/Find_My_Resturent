const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema ({
    name: String,
    description: String,
    category: String,
    imageURL: String,
    location: String,
    phone: String,
    rating: Number,

});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
