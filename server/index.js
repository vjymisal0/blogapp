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

// route to create a new blog post
app.post('/post-blog', async (req, res) => {
    const { title, description } = req.body
    const newBlogPost = new BlogPost({ title, description })
    await newBlogPost.save()
    res.json("Blog post saved successfully", newBlogPost)
})

// route to get all blog posts
app.get("/get-blogs", async (req, res) => {
    const blogPosts = await BlogPost.find()
    if (!blogPosts) {
        return res.status(404).json({ message: "No blog posts found" })
    } else {
        res.json(blogPosts)
    }
})

// route to delete a blog post
app.delete('/delete-blog/:id', async (req, res) => {
    const blogPost = await BlogPost.findByIdAndDelete(req.params.id)
    if (!blogPost) {
        return res.status(404).json({ message: "No blog post found" })

    }
    else {
        res.status(200).json("Blog post deleted successfully")
    }
})

// route to update a blog post
app.put('/update-blog/:id', async (req, res) => {
    const { title, description } = req.body
    const updatedBlogPost = await Blog
    Post.findByIdAndUpdate(req.params.id, {
        title
        , description
    }, {
        new: true

    })
    if (!updatedBlogPost) {
        return res.status(404).json({ message: "No blog post found" })
    }
    else {
        res.status(200).json("Blog post updated successfully", updatedBlogPost)
    }
}
)

// listen server
app.listen(port, () => {
    console.log(`Server is running on port ${port} click here to open: http://localhost:${port}`)
}
)




