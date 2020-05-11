"use restrict";
//@ts-check
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const filmename = 'data/todolist.txt';

var app = express();
app.use(bodyParser.json());
console.log('Start our code of node.js');

app.get('/', (req, res) => {
  var readFileCallback = (err, data) => {
    if (err) {
      res.status(500).send('Erro readind the file');
      return;
    }
    res.status(200).send(data);
  }; //readFileCallback()
  fs.readFile(filmename, 'utf8', readFileCallback);
});

app.post('/', (req, res) => {
  var readFileCallback = (err, data) => {
    if (err) {
      res.status(500).send('Erro readind the file');
      return;
    }
    data += '\n' + req.body.data;
    fs.writeFile(filmename, data, (err) => {
      if (err) {
        res.status(500).send('Erro readind the file');
        return;
      }
    });
    res.status(201).send(data);
  }; //readFileCallback()
  fs.readFile(filmename, 'utf8', readFileCallback);
});

app.listen(3333);
console.log('Server is running http://localhost:3333');