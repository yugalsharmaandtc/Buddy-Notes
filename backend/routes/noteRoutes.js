const express = require('express');
const router = express.Router();
const noteController = require('../controllers/controller');

router.post('/notes', noteController.createNote);
router.get('/notes', noteController.getNotes);

// Add more note-related routes

module.exports = router;