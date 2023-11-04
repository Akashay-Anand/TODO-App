const express = require('express');
const app = express();

app.get('/',(req, res) => {
    res.send('Welcome');
    res.end();
});

app.listen(5000);