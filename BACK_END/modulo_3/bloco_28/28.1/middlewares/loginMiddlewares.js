const verifyLoginUsername = (req, res, next) => {
  const { username } = req.body;

  if ( username.length < 5) {
    return res.status(400).json({ error: "Invalid username or password" });
  }

  next();
}

const verifyLoginPassword = (req, res, next) => {
  const { password } = req.body;

  if (password.length < 5) {
    return res.status(400).json({ error: "Invalid username or password" });
  }

  next();
}

module.exports = {
  verifyLoginUsername,
  verifyLoginPassword
}
