const petService = require('../services/pet.service');

const deletePet = async (req, res) => {
  try {
    const petId = req.params.id;
    const deletedPet = await petService.deletePetById(petId);

    if (!deletedPet) {
      return res.status(404).json({ message: 'Pet not found' });
    }

    res.json({ message: 'Pet deleted successfully' });
  } catch (error) {
    console.error('Error deleting pet:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  deletePet
};
