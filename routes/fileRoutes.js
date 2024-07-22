const express = require('express');
const router = express.Router();
const fileController = require('../controllers/fileController');
const upload = require('../config/multer');

router.get('/files', fileController.getAllFiles);
router.get('/files/:id', fileController.getFileById);
router.post('/files', upload.single('file'), fileController.uploadFile);
router.put('/files/:id', fileController.updateFile);
router.delete('/files/:id', fileController.deleteFile);

module.exports = router;
