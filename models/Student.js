const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    studentId: { type: String, required: true, unique: true }, // เลขประจำตัว
    fullName: { type: String, required: true },
    classLevel: { type: String, required: true }, // เช่น ม.4/1
    gpa: { type: Number, default: 0.00 },
    birthDate: Date,
    entryYear: { type: Number, default: 2568 } // ปีที่เข้า
});

module.exports = mongoose.model('Student', studentSchema);
