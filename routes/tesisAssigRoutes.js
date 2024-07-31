const express = require('express');
const router = express.Router();
const { getAllTesisAssigs, getTesisAssigById, createTesisAssig, updateTesisAssig, deleteTesisAssig, getTesisAssigsByUserId } = require('../controllers/tesisAssigController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/tesisAssigs', authMiddleware, getAllTesisAssigs);
router.get('/tesisAssigs/:id', authMiddleware, getTesisAssigById);
router.post('/tesisAssigs', authMiddleware,createTesisAssig);
router.put('/tesisAssigs/:id',authMiddleware ,updateTesisAssig);
router.delete('/tesisAssigs/:id',authMiddleware ,  deleteTesisAssig);

router.get('/tesisByUser/:userid',authMiddleware ,getTesisAssigsByUserId);

module.exports = router;
