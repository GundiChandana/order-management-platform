const mongoose = require('mongoose');

async function connectToDatabase() {
    try {
       await mongoose.connect(process.env.MONGODB_URI);
       console.log('Connected to MongoDb Atlas');
    } catch(error){
        console.log('Connection failed', error);
        process.exit(1);
    }
}

module.exports = connectToDatabase;