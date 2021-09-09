const express = require('express');
const router = express.Router();

let count = 1;

router.get('/', (req, res) => {
  res.json({ message: "Read Product" , method: req.method , count: count++ })
});

router.post('/', (req, res) => {
  res.json({ message: "Create Product" , method: req.method , count: count++ })
});

router.put('/', (req, res) => {
  res.json({ message: "Update Product" , method: req.method , count: count++ })
});

router.delete('/', (req, res) => {
  res.json({ message: "Delete Product" , method: req.method , count: count++ })
});

router.all('*', (req, res) => res.status(404).json({ message: 'Page not found on this server' }))

module.exports = router