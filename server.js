const express = require('express');
const fs = require('fs');

// Constants
const PORT_NUMBER = 8080;
const HOST_LOCATION = '0.0.0.0';

// App
const app = express();

const html = fs.readFileSync('index.html');
app.get('/', (req, res) => {
    res.writeHead(200);
    res.write(html);
    res.end();
});

app.listen(PORT_NUMBER, HOST_LOCATION);
console.log(`Running on http://${HOST_LOCATION}:${PORT_NUMBER}`);