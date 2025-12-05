const mongoose = require('mongoose');

const response = await fetch('/api/news');({
    title: { type: String, required: true },
    content: { type: String, required: true },
    imageUrl: { type: String, default: '' },
    category: { type: String, default: 'General' },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('News', newsSchema);