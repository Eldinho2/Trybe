const router = require('express').Router();
const jwt = require('jsonwebtoken');
const { verifyLoginUsername, verifyLoginPassword } = require('../middlewares/loginMiddlewares');
const SECRET = 'ODRUHGUIDRHGUDHSUIEFSIKFHSJKMEKSHBNEUJFSESREGRDTHDRGHDRHDRHDRVBDFJHNGJFGYHJRTH';

router.post('/', verifyLoginUsername, verifyLoginPassword, (req, res) => {
  const { username } = req.body;

  if (username === 'admin') {
    const token = jwt.sign({ username: username, admin: true }, SECRET, { expiresIn: '1h' });

    res.status(200).json({ token: token });
  } else {
    const token = jwt.sign({ username: username, admin: false }, SECRET, { expiresIn: '1h' });

    res.status(200).json({ token: token });
  }

});


module.exports = router;