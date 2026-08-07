const express = require('express');
const router = express.Router();
const { getShowDetails, getEpisodes } = require('../controllers/showController');

router.get('/show-details', getShowDetails);
router.get('/episodes', getEpisodes);

module.exports = router;