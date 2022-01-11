const express = require('express');
const app = express();

app.get('/login', (req, res) => {
    res.end('login');
})
app.listen(3000)