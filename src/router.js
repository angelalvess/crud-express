const express = require('express');
const {
  getAll,
  createUser,
  deleteUser,
  updateUser,
} = require('./Controllers/usersController'); // Fix the casing of the file path
const { validateUser } = require('./middlewares/usersMiddleware');

const router = express.Router();

router.get('/users', getAll);
router.post('/users', validateUser, createUser);
router.delete('/users/:id', deleteUser);
router.put('/users/:id', validateUser, updateUser);

module.exports = router;
