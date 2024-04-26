const userModel = require('../models/usersModel');

const getAll = async (req, res) => {
  const users = await userModel.getAll();
  return res.status(200).json(users);
};

module.exports = { getAll };
