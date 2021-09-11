const mongoose = require('mongoose')
const URL = `mongodb+srv://Haris:5337618@cluster0.uqzho.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const connectDB = async () => {
    try {
        await mongoose.connect(URL, { useNewUrlParser: true , useUnifiedTopology: true });
        console.log('DB CONNECTED')
    }
    catch (err){
        console.error(err.message)
        process.exit(1);
    }
} 

module.exports= connectDB;