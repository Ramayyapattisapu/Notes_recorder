const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');
const { isLoggedIn } = require('../middleware/checkAuth');

router.get('/dashboard', isLoggedIn, dashboardController.dashboard);

module.exports = router; 