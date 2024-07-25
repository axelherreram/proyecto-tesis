const express = require('express');
const router = express.Router();
const {getAllUsers, getLoggedUser} = require('../controllers/authController');
const authenticateToken = require('../middlewares/authMiddleware');

router.get('/allusers', getAllUsers);
router.get('/userlogged', authenticateToken, getLoggedUser);

module.exports = router;
