const express = require('express');
const router = express.Router();
const qualificationController = require('../controllers/qualificationController');

router.get('/qualifications', qualificationController.getAllQualifications);
router.get('/qualifications/:id', qualificationController.getQualificationById);
router.post('/qualifications', qualificationController.createQualification);
router.put('/qualifications/:id', qualificationController.updateQualification);
router.delete('/qualifications/:id', qualificationController.deleteQualification);

module.exports = router;
