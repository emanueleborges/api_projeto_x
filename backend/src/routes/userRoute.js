const { Router } = require('express');
const UserController = require('../controllers/UserController');
const router = Router();
const {upload}  = require('../config/upload');

router.post('/api/user/login', UserController.login);
router.post('/api/user/cadastro', upload.single('photo'),  UserController.register);
module.exports = router;