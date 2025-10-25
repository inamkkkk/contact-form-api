const express = require('express');
const contactController = require('../controllers/contactController');
const { validateContactForm } = require('../middlewares/validation');

const router = express.Router();

router.post('/', validateContactForm, contactController.submitForm);

module.exports = router;