const express = require('express');
const loginRoutes = require('./routes/loginRoutes');
const usersRoutes = require('./routes/usersRoutes');

const app = express();
const PORT = 3000;

app.use(express.json())


app.use('/login', loginRoutes);
app.use('/users', usersRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
