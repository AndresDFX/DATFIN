const express = require('express');
const indexController = require('../controllers/index');
const router = express.Router();
module.exports = router;

//Index
router.get('/', indexController.index);

