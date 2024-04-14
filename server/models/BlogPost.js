const mongoose = require('mongoose')
const blogPostSchema = new mongoose.Schema({
    title: String,
    content: String
}, {
    timestamps: true
});
const BlogPost = mongoose.model('BlogPost', blogPostSchema);
module.exports = BlogPost;