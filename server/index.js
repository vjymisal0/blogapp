const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

// middleware
app.use(express.json())
app.use(cors())

// routes


// listen server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
}
)




