const mongoose = require('mongoose');
const News = require('./models/News');
require('dotenv').config();

async function main() {
    try {
        await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/schoolDB', { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to DB...');
        await seedData();
    } catch (err) {
        console.error('DB connection error:', err);
    } finally {
        await mongoose.connection.close();
    }
}

const seedData = async () => {
    const dummyNews = [
        {
            title: "ประกาศวันเปิดภาคเรียน",
            content: "โรงเรียนจะเปิดเทอมวันที่ 16 พ.ค. นี้",
            category: "วิชาการ"
        },
        {
            title: "กิจกรรมกีฬาสี",
            content: "ขอเชิญทุกคนร่วมงานกีฬาสีประจำปี",
            category: "กิจกรรม"
        }
    ];

    try {
        await News.deleteMany({});
        await News.insertMany(dummyNews);
        console.log('✅ เพิ่มข้อมูลข่าวจำลองเรียบร้อย!'); // <--- ต้องขึ้นคำนี้
    } catch (e) {
        console.error('Error inserting seed data:', e);
        throw e;
    }
};

// Run the seeder when invoked directly
if (require.main === module) {
    main();
}
