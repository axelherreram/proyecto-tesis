const express = require('express');
const router = express.Router();
// const tesisAssigController = require('../controllers/tesisAssigController');
const { getAllTesisAssigs, getTesisAssigById, createTesisAssig, updateTesisAssig, deleteTesisAssig, getTesisAssigsByUserId } = require('../controllers/tesisAssigController');

router.get('/tesisAssigs', getAllTesisAssigs);
router.get('/tesisAssigs/:id', getTesisAssigById);
router.post('/tesisAssigs', createTesisAssig);
router.put('/tesisAssigs/:id', updateTesisAssig);
router.delete('/tesisAssigs/:id', deleteTesisAssig);

router.get('/tesisByUser/:userid', getTesisAssigsByUserId);

module.exports = router;
