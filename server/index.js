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
    const blogPost = new BlogPost({
        title: req.body.title,
        description: req.body.description

    })
    if (!req.body.title || !req.body.description) {
        return res.status(400).json({ message: "Title or description is missing" })
    }
    else {
        await blogPost.save()
        res.status(200).json("Blog post created successfully")
    }

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
    const blogPost = await BlogPost.findByIdAndUpdate(req.params.id)
    if (!blogPost) {
        return res.status(404).json({ message: "No blog post found" })
    }
    else {
        if (!req.body.title || !req.body.description) {
            return res.status(400).json({ message: "Title or description is missing" })
        }

        else if (blogPost.title === req.body.title && blogPost.description !== req.body.description) {
            blogPost.description = req.body.description
            await blogPost.save()
            res.status(200).json("Blog post updated successfully")
        }
        blogPost.title = req.body.title
        blogPost.description = req.body.description
        await blogPost.save()
        res.status(200).json("Blog post updated successfully")
    }
}
)

// listen server
app.listen(port, () => {
    console.log(`Server is running on port ${port} click here to open: http://localhost:${port}`)
}
)




