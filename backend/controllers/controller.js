const Note = require('../models/notes');
const Task = require('../models/tasks');

// Note related logic
exports.createNote = async (req, res) => {
  try {
    const { title, content, owner } = req.body;
    const note = new Note({ title, content, owner });
    await note.save();
    res.status(201).json(note);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createTask = async (req, res) => {
    try {
      const { title, description, dueDate, assignee } = req.body;
      const task = new Task({ title, description, dueDate, assignee });
      await task.save();
      res.status(201).json(task);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  exports.getTasks = async (req, res) => {
    try {
      const tasks = await Task.find();
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };