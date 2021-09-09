const express = require('express');
const app = express();
const port = 8000;
const axios = require('axios');


app.get('/dog', async (req, res, next) => {
  try{
    const response = await axios.get('https://dog.ceo/api/breeds/image/random')
    console.log(response.data.message)
    res.send(`<img src='${response.data.message}'></img>`)
  } catch(err) {
    next(err)
  }
});

app.use(function(req, res, next) {
  res.status(500).json({ message: err.message });
})

app.listen(port, () => console.log(`Server running port: ${port}`));