const mongoose = require('mongoose');
const News = require('./models/News');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/schoolDB')
.then(() => {
    console.log('Connected to DB...');
    seedData();
})
.catch(err => console.log(err));

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
        console.log('Error:', e);
    }

    mongoose.connection.close();
};