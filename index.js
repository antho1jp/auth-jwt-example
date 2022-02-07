const express = require('express');
const app = express();
const port = 9000;
const routes = require('./routes');
app.use(routes);
app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
      res.status(401).send('invalid token...');
    }
});
app.listen(port, ()=> { console.log(`app listening on http://localhost:${port}`); });