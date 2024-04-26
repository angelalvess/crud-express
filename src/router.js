const express = require('express');
const usersController = require('./Controllers/usersController'); // Fix the casing of the file path

const router = express.Router();

router.get('/users', usersController.getAll);

module.exports = router;
