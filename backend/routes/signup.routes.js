// routes/signupRoutes.js

const express = require('express');
const { signUp } = require('../controllers/signup.controller.js');

const router = express.Router();

router.post('/signup', signUp);

module.exports = router;
