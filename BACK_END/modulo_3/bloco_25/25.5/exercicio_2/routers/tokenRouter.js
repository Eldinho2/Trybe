const router = require('express').Router();
const validateToken = require('../middlewares/validate');

router.get('/btc/price', validateToken, async (_req, res) => {
  const response = await axios.get("https://api.coindesk.com/v1/bpi/currentprice/BTC.json");
  const json = response.json();
  res.status(200).json(json);
});

module.exports = router;