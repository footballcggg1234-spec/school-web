require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve frontend static files from project root (index.html is in the repo root)
app.use(express.static(path.join(__dirname)));

// เชื่อมต่อ MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://admin:<db_password>@cluster0.8counxn.mongodb.net/?appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch(err => console.error('❌ MongoDB Connection Error:', err));

// เรียกใช้ Routes
const newsRoutes = require('./routes/newsRoutes');

app.use('/api/news', newsRoutes);
// app.use('/api/events', eventRoutes); // (ถ้ามี)

// รัน Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
// ในไฟล์ server.js

// ... (หลัง const newsRoutes = require('./routes/newsRoutes'); )
const eventRoutes = require('./routes/eventRoutes'); // <-- เพิ่มบรรทัดนี้

// ...
app.use('/api/news', newsRoutes); 
app.use('/api/events', eventRoutes); // <-- เพิ่มบรรทัดนี้
// ...