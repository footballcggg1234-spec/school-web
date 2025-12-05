const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    imageUrl: { type: String, default: '' },
    category: { type: String, default: 'General' },
    createdAt: {
        type: Date,
        default: Date.now
    }
}); // <--- ตรงนี้ต้องมีวงเล็บปิดให้ครบ

module.exports = mongoose.model('News', newsSchema);