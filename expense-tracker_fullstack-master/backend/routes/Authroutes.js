// routes/auth.js
const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/Usermodel');
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET;

// // Register
// router.post('/register', async (req, res) => {
//   try {
//     const { username, email, password } = req.body;
//     const user = await User.create({ username, email, password });
//     res.status(201).json({ message: 'User registered' });
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// });

// // Login
// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     if (!user || !(await user.comparePassword(password))) {
//       return res.status(401).json({ error: 'Invalid credentials' });
//     }
//     const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '7d' });
//     res.json({ token, user: { id: user._id, username: user.username } });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

module.exports = router;
