'use strict';

class Counter {
    #count = 0

    increment() {
        this.#count++;
    }

    get value() {
        return this.#count;
    }
}

const counter = new Counter()
counter.increment()
counter.value // 1

const express = require('express');

// Constants
const PORT_NUMBER = 8080;
const HOST_LOCATION = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World' + counter.value);
});

app.listen(PORT_NUMBER, HOST_LOCATION);
console.log(`Running on http://${HOST_LOCATION}:${PORT_NUMBER}`);