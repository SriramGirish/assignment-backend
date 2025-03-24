const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'User not logged in' });
  }

  res.json({ center: [20.5937, 78.9629], zoom: 5 });
});

module.exports = router;
