const express = require('express');
const router = express.Router();
const petController = require('../controllers/pet.controller');

router.delete('/:id', petController.deletePet);

module.exports = router;
