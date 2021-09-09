const express = require('express');
const app = express();
const port = 8000 ; 
const router = require('./route/route')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/', router)

app.listen(port, ()=> console.log("Server is running"))