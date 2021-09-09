const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.status(200).render('index'))

router.get('/login', (req, res) => res.status(200).render('login'))

router.get('/register', (req, res) => res.status(200).render('register'))

router.post('/submit-login', (req, res) => res.status(200).redirect('/'))

router.post('/submit-register', (req, res) => res.status(200).redirect('/'))

router.all('*', (req, res) => res.status(404).render('notFound'))


module.exports = router