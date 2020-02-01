const http = require('http');
const https = require('https');
const express = require('express');
const hostname = '127.0.0.1';
const port = 9000;
const app = express();
const cors = require('cors');
app.use(cors());

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

app.get('/getWeatherData', (req, res) => {
  http.get('http://api.openweathermap.org/data/2.5/weather?q=' + req.query.cityName + '&appid=3d8b309701a13f65b660fa2c64cdc517', (resp) => {
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      res.json(JSON.parse(data));
    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
})

app.get('/getHourlyWeatherData', (req, res) => {

  https.get('https://samples.openweathermap.org/data/2.5/forecast?q=' + req.cityName + '&appid=b6907d289e10d714a6e88b30761fae22', (resp) => {
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      res.json(JSON.parse(data));
    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
})
