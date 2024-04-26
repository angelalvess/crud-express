const userModel = require('../models/usersModel');

const getAll = async (req, res) => {
  const users = await userModel.getAll();
  return res.status(200).json(users);
};

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const createdUser = await userModel.createUser({ name, email, password });
  return res.status(201).json(createdUser);
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  await userModel.deleteUser(id);
  return res.status(204).end();
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  await userModel.updateUser(id, { name, email, password });
  return res.status(200).json({ id, name, email, password });
};

module.exports = { getAll, createUser, deleteUser, updateUser };
