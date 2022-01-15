const jwt = require('jsonwebtoken');

const verifyIfAsAdmin = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  const decoded = jwt.decode(token);

  if (!decoded.admin) {
    return res.status(401).json({ error: 'You are not an admin' });
  }

  next();
}

module.exports = {
  verifyIfAsAdmin,
};