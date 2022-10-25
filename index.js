const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req,res) => {
    res.send('Edu Dive API running')
})

app.listen(port, () => {
    console.log('Edu Dive server running on port', port)
})