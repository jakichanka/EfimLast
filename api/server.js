const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const mongoose = require('mongoose');

// Connection URL
const url = 'mongodb+srv://virtu:T17081998t@cluster0.qdacw.mongodb.net/Films?retryWrites=true&w=majority';

try {
  mongoose.connect(url,
  {
      useNewUrlParser: true,
      useUnifiedTopology: true
  });
  console.log("Good db connection");
} catch (error) {
  console.log(error);
};

mongoose.connection.on('error', err => {
  console.log(err);
});

app.get("/getFilms", (req, res) => {
  return JSON.stringify({filmName: "Химира"});
});

app.listen(process.env.PORT || 8080);
