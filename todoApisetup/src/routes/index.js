const express = require('express');
const { homepingController } = require('../controllers/home.controller');
const router = express.Router();

router.get('/home', homepingController);
router.get('/questions', (req, res) => {
  return res.json({ message: 'List of questions' });
});
module.exports = router;
