const connection = require('./connection');

const getAll = async () => {
  const [users] = await connection.execute('SELECT * FROM user');
  return users;
};

const createUser = async (user) => {
  const { name, email, password, created_at } = user;
  const query =
    'INSERT INTO user (name, email, password, created_at) VALUES (?, ?, ?, ?)';

  const dateUTC = new Date(Date.now()).toUTCString();

  const [createdUser] = await connection.execute(query, [
    name,
    email,
    password,
    dateUTC,
  ]);

  return {
    id: createdUser.insertId,
    name,
    email,
    password,
    created_at: dateUTC,
  };
};

const deleteUser = async (id) => {
  const query = 'DELETE FROM user WHERE id = ?';
  await connection.execute(query, [id]);
};

const updateUser = async (id, user) => {
  const { name, email, password } = user;
  const query =
    'UPDATE user SET name = ?, email = ?, password = ? WHERE id = ?';
  await connection.execute(query, [name, email, password, id]);
};

module.exports = { getAll, createUser, deleteUser, updateUser };
