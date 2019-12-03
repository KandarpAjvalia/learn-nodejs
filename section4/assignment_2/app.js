const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
    console.log('Hi from assignment 2 users');
    res.send('<h1>Hi from assignment 2 Users</h1>');
});

app.use('/', (req, res, next) => {
    console.log('Hi from assignment 2');
    res.send('<h1>Hi from assignment 2</h1>');
});

app.listen(3000)