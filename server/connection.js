const mongoose = require('mongoose')
const MONGO_URI = "mongodb+srv://misalvijay153:cIHXVx6CME5GqEsm@cluster0.l5dzfxr.mongodb.net/blogs?retryWrites=true&w=majority&appName=Cluster0"
const connectDb = async () => {
    try {
        const connection = await mongoose.connect(MONGO_URI)
        if (connection) {
            console.log('Database connected successfully')
        }
        else {
            console.log('Database connection failed')
        }

    }
    catch (err) {
        console.log(err)
    }
}

module.exports = { connectDb }