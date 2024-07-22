const express = require('express');
const router = express.Router();
const tesisAssigController = require('../controllers/tesisAssigController');

router.get('/tesisAssigs', tesisAssigController.getAllTesisAssigs);
router.get('/tesisAssigs/:id', tesisAssigController.getTesisAssigById);
router.post('/tesisAssigs', tesisAssigController.createTesisAssig);
router.put('/tesisAssigs/:id', tesisAssigController.updateTesisAssig);
router.delete('/tesisAssigs/:id', tesisAssigController.deleteTesisAssig);

module.exports = router;
