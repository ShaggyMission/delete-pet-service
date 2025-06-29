const Pet = require('../models/pet.model');

const deletePetById = async (id) => {
  const deletedPet = await Pet.findByIdAndDelete(id);
  return deletedPet;
};

module.exports = {
  deletePetById
};
