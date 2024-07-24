const express = require('express');
const { register, login, logout, updateUser, upload } = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', upload.single('profileImage'), register);
router.post('/login', login);
router.post('/logout', authMiddleware, logout);
router.put('/update', authMiddleware, upload.single('profileImage'), updateUser);

module.exports = router;
