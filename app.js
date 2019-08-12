const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {
    PORT
} = require('./config/env.config');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static('public'))

app.use(require('./routes/index.routes'))
app.listen(PORT, () => {
    console.log(`Server is starting at ${PORT}
    http://localhost:${PORT}/api/v1`);
})