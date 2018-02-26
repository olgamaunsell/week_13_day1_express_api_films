const express = require('express');

const router = new express.Router();

router.use('/films', require('./films'));

// HOME route
router.get('/', function(req, res) {
  res.json({ data: 'Home'});
});

module.exports = router;
