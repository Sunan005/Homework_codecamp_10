const fs = require('fs');
const _ = require ('lodash');

let data = {
 user: []
}

const writeFile = () => {
  fs.writeFileSync('product.json', JSON.stringify(data))
};

const getData = (req, res) => {
  res.status(200).json(data)
};

const createData = (req, res) => {
  const newData = {
    id: _.uniqueId(),
    name: req.body.name,
    price: req.body.price
  }
  data.user.push(newData);
  writeFile()
  res.status(201).json(newData)
};

const updateData = (req, res) => {
  data.user.map( el => {
    if(el.id === req.params.id){
       {el.name = req.body.name , el.price = req.body.price}
    } else {
      el
    }
  })
  writeFile()
  res.status(200).json({ message : "Updating is Success"})
};

const deleteData = (req, res) => {
  data.user = data.user.filter( el => el.id !== req.params.id)
  writeFile()
  res.status(200).json({ message : "Delete is Success" })
};

module.exports = {
  getData,
  createData,
  updateData,
  deleteData
}