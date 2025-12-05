const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    date: { type: Date, required: true }, // วันที่จัดกิจกรรม
    location: { type: String }, // สถานที่
    description: String
});

module.exports = mongoose.model('Event', eventSchema);