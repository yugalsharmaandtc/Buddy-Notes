const express = require('express');
const router = express.Router();
const taskController = require('../controllers/controller');

router.post('/tasks', taskController.createTask);
router.get('/tasks', taskController.getTasks);

// Add more task-related routes

module.exports = router;