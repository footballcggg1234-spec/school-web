const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    title: { type: String, required: true }, // หัวข้อข่าว
    content: { type: String, required: true }, // เนื้อหา
    imageUrl: { type: String, default: '' }, // ลิงก์รูปภาพปก
    category: { type: String, default: 'General' }, // หมวดหมู่: วิชาการ, กิจกรรม, ทั่วไป
    createdAt: { type: Date, default: Date.now } // วันที่ลงข่าว
});

module.exports = mongoose.model('News', newsSchema);