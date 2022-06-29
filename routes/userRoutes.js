const express = require('express');
// const { getAllUser, getUser } = require('../controllers/userController');
const tourController = require('./../controllers/userController');

const router = express.Router();

// router.route('/').get(getAllUser);
router.route('/').get(tourController.getAllUser);
// router.route('/:id').get(getUser);
router.route('/:id').get(tourController.getUser);

module.exports = router;
