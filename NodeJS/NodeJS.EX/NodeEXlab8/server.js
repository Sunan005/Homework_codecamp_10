const express = require('express');
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const checkInt = (value) => {
  if(isNaN(value.a)) {
    return false
  }
  return true
};

app.get('/sum', (req, res, next) => {
  let int = req.query
  let sum = 0
  let isInt = checkInt(int)
  if(isInt) {
    res.json({ sum: parseInt(int.a) + parseInt(int.b) });
    return res.end()
  }
  int.arr.slice(1, int.arr.length - 1).split(',').map( el => sum += parseInt(el))
  res.json({ sum })
  next()
});

app.get('/sum/:int1/:int2', (req, res) => {
  let int = req.params
  res.json({ sum: parseInt(int.int1) + parseInt(int.int2) });
});

app.post('/sum', (req, res) => {
  let int = req.body
  res.json({ sum: parseInt(int.a) + parseInt(int.b) });
});

app.listen(port, () => console.log(`Server running port: ${port}`));
