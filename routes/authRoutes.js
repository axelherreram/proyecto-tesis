const express = require('express');
const { register, login, logout, updateUser, upload, getUserProfile } = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', upload.single('profileImage'), register);
router.post('/login', login);
router.post('/logout', authMiddleware, logout);
router.put('/update', authMiddleware, upload.single('newProfileImage'), updateUser);

module.exports = router;
 