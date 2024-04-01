// controllers/signupController.js

const User = require('../models/user.model.js');

const signUp = (req, res) => {
  const { email, fullName, username, password } = req.body;
  const newUser = new User({
    email,
    fullName,
    username,
    password
  });
  newUser.save()
    .then(() => {
      res.status(200).json({ message: 'User signed up successfully', user: newUser });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

module.exports = { signUp };
