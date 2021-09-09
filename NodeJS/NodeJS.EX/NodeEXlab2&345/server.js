const express = require('express');
const router = require('./route/route')
const app = express();
const port = 8000;

app.use('/', router)

app.listen(port, () => console.log(`Server running port: ${port}`))