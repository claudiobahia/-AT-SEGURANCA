const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');

const swaggerDocs = require('./swagger.json')

const app = express();

app.use("/api-docs", swaggerUi.serve,swaggerUi.setup(swaggerDocs))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

require('./controllers/atividadeController')(app);

app.listen('3001')