
const express = require('express');

const port = 8888;

const app = express()

app.use(express.json());

app.get('/', (req, res) => {
    res.send("App is running");
})

app.listen(port, () => {
    console.log("Backend server is running !..")
})

