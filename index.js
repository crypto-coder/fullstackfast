
const express = require('express');
const bodyParser = require('body-parser');
const cfenv = require('cfenv');
const appEnv = cfenv.getAppEnv();

var app = express()

// Serve static assets like index.html and page.js from root directory
app.use(express.static(__dirname));

app.use(bodyParser.json());

const MY_PORT = appEnv.isLocal ? 8080 : appEnv.port;
const MY_HOST = appEnv.isLocal ? "localhost" : appEnv.host;


app.listen(MY_PORT, () => {
  console.log("App started.");
});


/////////////////////////////////////////////////


app.get('/ping', (req, res) => {
    res.status(200).json({ message: "MY SUCCESS" }); 
});
