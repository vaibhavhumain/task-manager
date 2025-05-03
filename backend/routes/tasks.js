const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

router.get("/", async (req, res) => {
  const { status } = req.query;
  const filter = status ? { status } : {};
  const tasks = await Task.find(filter);
  res.json(tasks);
});

router.post("/", async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

module.exports = router;
