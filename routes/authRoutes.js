const express = require('express');
const { register, login, logout, updateUser} = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

// Rutas para el manejo de usuarios
router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout); 
router.put('/update', authMiddleware, updateUser);

module.exports = router;
 