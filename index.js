const express = require('express')
const app = express()
const port = 3000
var routes = require('./routes')
app.use(routes);

app.listen(port, ()=> { console.log(`app listening on http://localhost:${port}`); })