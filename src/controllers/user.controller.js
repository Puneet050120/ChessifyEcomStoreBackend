const userService = require('../services/user.service');

const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const user = await userService.register(name, email, password);
    res.status(201).json({ user });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const token = await userService.login(email, password);
    res.json({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
  login,
};
