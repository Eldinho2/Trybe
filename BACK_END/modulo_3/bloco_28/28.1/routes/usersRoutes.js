const router = require('express').Router();
const jwt = require('jsonwebtoken');
const { verifTokenJwt } = require('../middlewares/verifyTokenJwt');
const { verifyIfAsAdmin } = require('../middlewares/verifyIfAsAdmin');

router.get('/me', verifTokenJwt, (req, res) => {
  const token = req.headers['authorization']

  const decoded = jwt.decode(token)

  res.status(200).json({ username: decoded.username, admin: decoded.admin });
});

router.get('/top-secret',verifTokenJwt, verifyIfAsAdmin, (req, res) => {
  res.status(200).json({ secretInfo: 'Peter Parker é o Homem-Arannha 😐😮'})
})

module.exports = router;