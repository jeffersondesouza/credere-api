/* Código simplório, apenas para fornecer o serviço para a aplicação */

const express = require('express')
const app = express();
const routes = require('../app/routes');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

/* 
app.set('clientPath', path.join(__dirname, '../..', 'client'));
console.log(app.get('clientPath'));
app.use(express.static(app.get('clientPath'))); */
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");

  
  next();
});


routes(app);

module.exports = app;