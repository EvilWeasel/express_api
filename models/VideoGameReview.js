const mongoose = require('mongoose');

const videoGameReviewSchema = new mongoose.Schema({
    name: String,
    description: String,
    rating: Number,
    image: String,
    article: String,
    createdAt: Date,
    updatedAt: Date,
});

module.exports = mongoose.model("VideoGameReview", videoGameReviewSchema);