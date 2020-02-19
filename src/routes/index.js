const express = require('express');
// const env = require('require-env');
const { getBysearch, apidata } = require('../controller');
// const appid = env.require('app_id');
// const appkey = env.require('app_key');
const router = express.Router();

router.get('/food', apidata); // all data
router.post('/foo', getBysearch); // data by input serch

module.exports = router;
