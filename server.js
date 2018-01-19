var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, (err, client) => {
  if (err)
    throw err;
  else{
  // Client returned
    var db = client.db('weatherstation'); //Name of the data based
    console.log("Connected to Mongod");
    app.listen(8080);
    app.use(bodyParser.json())
    app.post('/', function(req, res) {
       // Insert JSON straight into MongoDB in the collection SensorReadings
      db.collection("SensorReadings").insert(req.body, (err, result) => {
          if (err)
             res.send('Error');
      /*    else
            res.send('Success');
      */
      });
    });
  }
});
