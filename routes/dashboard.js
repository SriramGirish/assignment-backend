const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'User not logged in' });
  }
 
  res.json({ cards: [{ id: 1, title: 'Card 1' }, { id: 2, title: 'Card 2' }] });
});

module.exports = router;
