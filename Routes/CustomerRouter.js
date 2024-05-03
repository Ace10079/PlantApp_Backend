const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/CustomerController');
const AdminController=require('../Controllers/AdminController')



router.post('/customer',UserController.registerUser);
router.post('/admin', AdminController.registerAdmin);
router.put('/update', UserController.updateUserProfile);
router.put('/updateadmin', AdminController.updateAdmin);
router.get('/getuserbyemail', UserController.getUserByEmail);
router.get('/getall', UserController.getAllUsers);
router.get('/getadminbyemail', AdminController.getAdminByEmail);
router.get('/getalladmin', AdminController.getAllAdmins);
router.put('/adminupdate', AdminController.updateAdmin);
router.delete('/deletecustomer',UserController.deleteUser);
router.delete('/deleteadmin',AdminController.deleteAdmin);


module.exports = router;
