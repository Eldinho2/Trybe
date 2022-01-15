const jwt = require('jsonwebtoken');
const SECRET = 'ODRUHGUIDRHGUDHSUIEFSIKFHSJKMEKSHBNEUJFSESREGRDTHDRGHDRHDRHDRVBDFJHNGJFGYHJRTH';

const verifTokenJwt = (req, res, next) => {
  const token = req.headers['authorization'];

  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  })  
  
  next();
}

module.exports = {
  verifTokenJwt
};
