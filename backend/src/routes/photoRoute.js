const { Router } = require('express');
const PhotoController = require('../controllers/PhotoController');
const router = Router();
const {upload}  = require('../config/upload');

router.post('/api/user/cadastro/uploads/:id', upload.single('photo'),  PhotoController.uploads);
module.exports = router;