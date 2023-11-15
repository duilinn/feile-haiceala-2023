const express = require('express');
const app = express();
const fs = require('fs');
var cors = require('cors');
const PORT = process.env.PORT || 5000;

app.use(cors());

const countiesEasy = ["donegal", "galway", "kerry"];
const countiesHard = ["donegal", "mayo", "galway", "clare", "kerry", "cork", "waterford"];

function titleCase(s) {
  return s[0].toUpperCase() + s.substring(1);
}

app.get("/getItemEasy", async (req, res) => {


  var randomCountyName = countiesEasy[Math.floor(Math.random() * countiesEasy.length)];

  console.log("Getting random entry from Co. " + titleCase(randomCountyName));
  fs.readFile("volumes_by_county/" + randomCountyName + ".json", 'utf8', (err, data) => {
    if (err) {
      console.log(`Error reading file from disk: ${err}`)
    } else {
      // parse JSON string to JSON object
      const items = JSON.parse(data)

      console.log("items length = " + items.length);

      //get random item in county
      var randomItem = items[Math.floor(Math.random() * items.length)];
      return res.json(randomItem);
    }
  })
});

app.get("/getItemHard", async (req, res) => {


  var randomCountyName = countiesHard[Math.floor(Math.random() * countiesHard.length)];

  console.log("Getting random entry from Co. " + titleCase(randomCountyName));
  fs.readFile("volumes_by_county/" + randomCountyName + ".json", 'utf8', (err, data) => {
    if (err) {
      console.log(`Error reading file from disk: ${err}`)
    } else {
      // parse JSON string to JSON object
      const items = JSON.parse(data)

      console.log("items length = " + items.length);

      //get random item in county
      var randomItem = items[Math.floor(Math.random() * items.length)];
      return res.json(randomItem);
    }
  })
});


// Listen to the App Engine-specified port, or 8080 otherwise
// const PORT = 4000; //process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});



