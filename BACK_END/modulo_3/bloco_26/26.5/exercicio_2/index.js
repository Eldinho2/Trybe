const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const tokenRouter = require('./routers/tokenRouter');


const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/btc/price', tokenRouter);


app.listen(3000, () => {
  console.log('Server2 running on port 3000');
});
