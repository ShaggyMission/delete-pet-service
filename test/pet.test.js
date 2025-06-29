const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../app'); 
const Pet = require('../models/pet.model');

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe('DELETE /pets/:id', () => {
  it('should delete a pet successfully', async () => {
    const pet = await Pet.create({
      name: 'Firulais',
      breed: 'Beagle',
      age: 4,
      healthStatus: 'Good',
      description: 'Friendly beagle',
      location: 'Quito',
      images: [],
    });

    const res = await request(app).delete(`/pets/${pet._id}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Pet deleted successfully');

    const deleted = await Pet.findById(pet._id);
    expect(deleted).toBeNull();
  });

  it('should return 404 if pet not found', async () => {
    const fakeId = new mongoose.Types.ObjectId();
    const res = await request(app).delete(`/pets/${fakeId}`);
    expect(res.statusCode).toBe(404);
    expect(res.body.message).toBe('Pet not found');
  });
});
