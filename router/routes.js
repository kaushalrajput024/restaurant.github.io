const express = require('express');
const router = express.Router();
const cntrl = require('../controller/cntrl');

router.get('/', cntrl().index);
router.get('/contact', cntrl().contact);
router.get('/about', cntrl().about);
router.get('*', cntrl().default);

module.exports = router;