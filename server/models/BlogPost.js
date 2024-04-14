const mongoose = require('mongoose')
const blogPostSchema = new mongoose.Schema();
const BlogPost = mongoose.model('BlogPost', blogPostSchema);
module.exports = BlogPost;