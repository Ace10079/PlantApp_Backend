const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/CustomerController');
const AdminController=require('../Controllers/AdminController')

router.post('/customer', UserController.registerUser);
router.post('/admin', AdminController.registerAdmin);
router.put('/update', UserController.updateUser);
router.put('/updateimg', UserController.updateImgUser);
router.put('/updateimg', UserController.updateImgUser);
router.get('/getuserbyemail', UserController.getUserByEmail);
router.get('/getall', UserController.getAllUsers);
router.put('/adminupdate', AdminController.updateAdmin);


module.exports = router;
