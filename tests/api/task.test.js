const request = require('supertest');

const app = require("../../app");
const Task = require('../../src/db/models/Task');
const data = {
  entityId: 1,
  entityType: "plant",
  taskType: "watering",
}

afterAll(() => {
  Task.destroy({
    where: { entityId: 1 }
  })
})

describe("Testing task routes", () => {
  test("should create a task", async () => {

    await request(app)
      .post("/task")
      .send(data)
      .expect(200)
      .then(async (response) => {
        expect(response.body.id).toBeTruthy();
        expect(response.body.entityId).toBe(data.entityId);
        expect(response.body.entityType).toBe(data.entityType);
        expect(response.body.taskType).toBe(data.taskType);
        expect(new Date(response.body.createdAt)).toBeInstanceOf(Date);
        expect(new Date(response.body.updatedAt)).toBeInstanceOf(Date);

        // Check the data in the database
        const task = await Task.findByPk(response.body.id);
        expect(task).toBeTruthy();
        expect(task.entityId).toBe(data.entityId);
        expect(task.entityType).toBe(data.entityType);
        expect(task.taskType).toBe(data.taskType);
      })
  })

  test("should get all tasks", async () => {
    await request(app)
      .get("/task")
      .expect("Content-Type", /json/)
      .expect(200)
      .then(response => {
        let first = response.body[0];
        expect(first.id).toBeTruthy();
        expect(first.entityId).toBe(data.entityId);
        expect(first.entityType).toBe(data.entityType);
        expect(first.taskType).toBe(data.taskType);
        expect(new Date(first.createdAt)).toBeInstanceOf(Date);
        expect(new Date(first.updatedAt)).toBeInstanceOf(Date);
      });
  });
});