const express = require('express');
const router = express.Router();
const {getAllUsers, getLoggedUser} = require('../controllers/authController');
const authenticateToken = require('../middlewares/authMiddleware');
const authorizeAdmin = require('../middlewares/authorizeAdmin');

router.get('/allusers', authenticateToken, authorizeAdmin, getAllUsers);
router.get('/userlogged', authenticateToken, getLoggedUser);

module.exports = router;
