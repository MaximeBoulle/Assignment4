const express = require('express');
const router = express.Router();

const UserController =  require('../controllers/UserController');

router.get('/', UserController.getAllUsers);
router.get('/random', UserController.getRandomUser);
router.post('/', UserController.createUser);


router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);
router.get('/:id', UserController.getUserById);

module.exports = router;
