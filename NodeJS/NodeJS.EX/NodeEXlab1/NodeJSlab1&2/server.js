const express = require('express');
const app = express();
const path = require('path');
const port = 8000;

app.get('/', (req, res) => res.status(200).sendFile(path.join(__dirname, './public', 'index.html')))

app.get('/home', (req, res) => res.status(200).sendFile(path.join(__dirname, './public', 'home.html')))

app.all('*', (req, res) =>  res.status(404).sendFile(path.join(__dirname, './public', 'notfound.html')))

app.listen(port, () => console.log(`Server running port:${port}`))