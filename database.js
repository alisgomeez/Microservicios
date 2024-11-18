const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/micros', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Conectado a MongoDB");
    } catch (error) {
        console.error("Error conectando a MongoDB", error);
        process.exit(1);
    }
};

module.exports = connectDB;
