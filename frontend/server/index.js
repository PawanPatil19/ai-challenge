const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const routesHandler = require('./routes/handler.js');


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', routesHandler);
const PORT = 4000; //backend routing port

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });
