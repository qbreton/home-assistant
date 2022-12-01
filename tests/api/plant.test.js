const request = require('supertest');

const app = require("../../app");
const Plant = require('../../src/db/models/Plant');
const data = {
  name: "Test plant",
  description: "Test description",
  wateringFrequency: "1/sem",
  pottingFrequency: "1/2ans"
}

afterAll(() => {
  Plant.destroy({
    where: { name: data.name }
  })
})

describe("Testing plant routes", () => {
  test("should create a plant", async () => {

    await request(app)
      .post("/plant")
      .send(data)
      .expect(200)
      .then(async (response) => {
        expect(response.body.id).toBeTruthy();
        expect(response.body.name).toBe(data.name);
        expect(response.body.description).toBe(data.description);
        expect(response.body.wateringFrequency).toBe(data.wateringFrequency);
        expect(response.body.pottingFrequency).toBe(data.pottingFrequency);
        expect(new Date(response.body.createdAt)).toBeInstanceOf(Date);
        expect(new Date(response.body.updatedAt)).toBeInstanceOf(Date);

        // Check the data in the database
        const plant = await Plant.findByPk(response.body.id);
        expect(plant).toBeTruthy();
        expect(plant.name).toBe(data.name);
        expect(plant.description).toBe(data.description);
        expect(plant.wateringFrequency).toBe(data.wateringFrequency);
        expect(plant.pottingFrequency).toBe(data.pottingFrequency);
      })
  })

  test("should get all plants", async () => {
    await request(app)
      .get("/plant")
      .expect("Content-Type", /json/)
      .expect(200)
      .then(response => {
        let first = response.body[0];
        expect(first.id).toBeTruthy();
        expect(first.name).toBe(data.name);
        expect(first.description).toBe(data.description);
        expect(first.wateringFrequency).toBe(data.wateringFrequency);
        expect(first.pottingFrequency).toBe(data.pottingFrequency);
        expect(new Date(first.createdAt)).toBeInstanceOf(Date);
        expect(new Date(first.updatedAt)).toBeInstanceOf(Date);
      });
  });
});