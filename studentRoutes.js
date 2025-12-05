const express = require('express');
const router = express.Router();
const Student = require('../models/Student'); // Import model

// GET: ดึงข้อมูลนักเรียนทั้งหมด (สำหรับแสดงใน Admin)
router.get('/', async (req, res) => {
    try {
        const students = await Student.find().sort({ studentId: 1 });
        res.json(students);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// เราจะยังไม่สร้าง POST / PUT / DELETE ในหน้านี้เพื่อความปลอดภัยครับ

module.exports = router;