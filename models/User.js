const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
    createdAt: Date,
    updatedAt: Date,
    friends: [mongoose.SchemaTypes.ObjectId],
    favoriteDrinks: [String],
    address: {
        street: String,
        number: String,
        postal: String,
        city: String
    }
});

module.exports = mongoose.model("User", userSchema);