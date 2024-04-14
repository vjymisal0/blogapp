const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;


// middleware
app.use(express.json())
app.use(cors())

// routes
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to my server' })
})


// listen server
app.listen(port, () => {
    console.log(`Server is running on port ${port} click here to open: http://localhost:${port}`)
}
)




