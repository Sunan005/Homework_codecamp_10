const express = require('express');
const app = express();
const port = 8000;
const router = require('./route/router');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', router)

app.listen(port, () => console.log(`Server running port: ${port}`))