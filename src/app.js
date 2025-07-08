const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('---hello world, this is nodejs running on azure---');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
