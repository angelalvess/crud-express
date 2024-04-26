const validateUser = (req, res, next) => {
  const { body } = req;

  if (body.name === undefined) {
    return res.status(400).json({ message: 'Invalid name' });
  }

  if (body.email === undefined) {
    return res.status(400).json({ message: 'Invalid email' });
  }

  if (body.password === undefined) {
    return res.status(400).json({ message: 'Invalid password' });
  }

  if (body.name === '') {
    return res.status(400).json({ message: ' Name cannot be empty' });
  }

  if (body.email === '') {
    return res.status(400).json({ message: 'Email cannot be empty' });
  }

  if (body.password === '') {
    return res.status(400).json({ message: 'Password cannot be empty' });
  }

  next();
};

module.exports = { validateUser };
