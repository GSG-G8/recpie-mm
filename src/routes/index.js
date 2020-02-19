const express = require('express');
const { getBysearch, apidata } = require('../controller');

const router = express.Router();

router.get('/food', apidata); // all data
router.post('/foo', getBysearch); // data by input serch

module.exports = router;
