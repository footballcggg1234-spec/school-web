const express = require('express');
const router = express.Router();
const Student = require('../models/Student'); // ต้องมีไฟล์ models/Student.js ด้วยนะ

// GET: ดึงข้อมูลนักเรียนทั้งหมด
router.get('/', async (req, res) => {
    try {
        const students = await Student.find().sort({ studentId: 1 });
        res.json(students);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;