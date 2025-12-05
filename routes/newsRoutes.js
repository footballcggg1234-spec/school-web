const express = require('express');
const router = express.Router();
const News = require('../models/News');

// 1. ดึงข่าวทั้งหมด (GET)
router.get('/', async (req, res) => {
    try {
        const news = await News.find().sort({ createdAt: -1 }); // เรียงจากใหม่ไปเก่า
        res.json(news);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// 2. เพิ่มข่าวใหม่ (POST)
router.post('/', async (req, res) => {
    const news = new News({
        title: req.body.title,
        content: req.body.content,
        imageUrl: req.body.imageUrl,
        category: req.body.category
    });

    try {
        const newNews = await news.save();
        res.status(201).json(newNews);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// 3. ลบข่าว (DELETE)
router.delete('/:id', async (req, res) => {
    try {
        await News.findByIdAndDelete(req.params.id);
        res.json({ message: 'ลบข่าวเรียบร้อย' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;