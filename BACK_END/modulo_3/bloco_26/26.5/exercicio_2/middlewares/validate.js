const tokenValidate = () => {
  return (req, res, next) => {
    const token = req.headers.authorization;
    const regex = !/^[a-zA-Z0-9]{12}$/;

    if (!token && regex.test(token)) {
      return res.status(401).json({ error: "Token inválido" });
    }

    next();
  };
};

module.exports = tokenValidate;
