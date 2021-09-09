const express = require('express');
const router = express.Router();

const arr = [{message : 'hello'}]

router.get('/', (req, res) => res.json({message: "Hello"}))

router.post('/login', (req, res) => res.json({ path: req.originalUrl.slice(1) , method: req.method }))

router.post('/register', (req, res) => res.json({ path: req.originalUrl.slice(1) , method: req.method }))

router.get('/user', (req, res) => res.json({ path: req.originalUrl.slice(1) , method: req.method }))

router.put('/user', (req, res) => res.json({ path: req.originalUrl.slice(1) , method: req.method }))

router.delete('/user', (req, res) => res.json({ path: req.originalUrl.slice(1) , method: req.method }))

router.all('*', (req, res) => res.status(404).json({ message: 'path not found on this server' }))

module.exports = router