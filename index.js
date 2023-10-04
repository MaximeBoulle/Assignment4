const express = require('express');
const app = express();
const port = 8000;

app.use(express.json());

const UserRoute = require('./routes/Users.js');
app.use('/user', UserRoute)

const StaticRoute = express.static('public');
app.use('/', StaticRoute);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

