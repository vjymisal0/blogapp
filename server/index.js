const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const { connectDb } = require('./connection')
const BlogPost = require('./models/BlogPost')


// connect to database
connectDb()

// middleware
app.use(express.json())
app.use(cors())

// routes
app.post('/post-blog', async (req, res) => {
    const { title, description } = req.body
    const newBlogPost = new BlogPost({ title, description })
    await newBlogPost.save()
    res.json(newBlogPost)
})


// listen server
app.listen(port, () => {
    console.log(`Server is running on port ${port} click here to open: http://localhost:${port}`)
}
)




