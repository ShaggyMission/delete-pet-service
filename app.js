const express = require('express');
const cors = require('cors');
const YAML = require('yamljs');
const swaggerUi = require('swagger-ui-express');
const petRoutes = require('./routes/pet.routes');

const app = express();

app.use(cors({
  origin: 'http://3.208.223.30:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());

const swaggerDocument = YAML.load('./docs/swagger.yaml');
app.use('/deletePets-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/pets', petRoutes);

module.exports = app;
