const mongoose = require('mongoose');

const db = async () => {
    try {
        await mongoose.connect("mongodb://localhost/parth_1", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('✅ Database connected successfully');
    } catch (error) {
        console.error('❌ Database connection failed:', error);
        process.exit(1);
    }
};

module.exports = { db };
