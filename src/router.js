const express = require('express');

const router = express.Router();

router.get('/users', (req, res) => {
  res.send('Hello Worlddd!');
});

module.exports = router;
