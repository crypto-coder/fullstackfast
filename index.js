
const express = require('express');
const bodyParser = require('body-parser');

var app = express()

// Serve static assets like index.html and page.js from root directory
app.use(express.static(__dirname));

app.use(bodyParser.json());

app.listen(443, () => {
  console.log("App started.");
});


/////////////////////////////////////////////////


app.get('/ping', (req, res) => {
    res.status(200).json({ message: "MY SUCCESS" }); 
});
