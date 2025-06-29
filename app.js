const express = require('express');
const app = express();
const YAML = require('yamljs');
const swaggerUi = require('swagger-ui-express');

const swaggerDocument = YAML.load('./docs/swagger.yaml');

app.use('/deletePets-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json());

const petRoutes = require('./routes/pet.routes');
app.use('/pets', petRoutes);

module.exports = app;
