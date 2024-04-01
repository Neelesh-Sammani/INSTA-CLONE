// app.js

const express = require('express');
const bodyParser = require('body-parser');
const signupRoutes = require('./routes/signup.routes.js');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use('/api', signupRoutes);

module.exports = app;
