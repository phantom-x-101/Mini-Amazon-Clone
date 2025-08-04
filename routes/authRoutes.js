const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');

// Register API
router.post('/register', registerUser);
    console.log(' 📥 POST Registered Users Received');

// Login API
router.post('/login', loginUser);

// Test route to debug if router is loading
router.get('/test', (req, res) => {
  res.send('Auth routes are working!');
});

module.exports = router;

