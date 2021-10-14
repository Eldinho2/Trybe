const router = require('express').Router();
const {
  isValidUsername,
  isValidEmail,
  isValidPassword,
} = require('../middlewares/loginValidate');

router.post(
  '/user/register',
  isValidUsername,
  isValidEmail,
  isValidPassword,
  (_req, res) => res.status(201).json({ message: 'user created' }),
);

router.post(
  '/user/login',
  isValidEmail,
  isValidPassword,
  (_req, res) => res.status(200).json({ token: '86567349784e' })
);

module.exports = router;
