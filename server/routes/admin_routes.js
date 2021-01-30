const { login, register } = require('../controllers/admin_controllers');
const express = require('express');

const router = express.router;

router.post('/login', login);
router.port('register', register);


module.exports = router;