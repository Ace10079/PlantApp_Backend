const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/CustomerController');
const AdminController=require('../Controllers/AdminController')
const multer = require('multer');
const path = require("path");


 const storage = multer.diskStorage({
    destination: 'img',
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    },
});


router.post('/login', UserController.login);
const upload = multer({ storage: storage }).single('img');
router.post('/customer', UserController.registerUser);
router.post('/admin', AdminController.registerAdmin);
router.put('/update', UserController.updateUserProfile);
router.put('/update-image', upload, UserController.updateUserImage);
router.put('/updateadmin', AdminController.updateAdmin);
router.get('/getuserbyemail', UserController.getUserByEmail);
router.get('/getall', UserController.getAllUsers);
router.get('/getadminbyemail', AdminController.getAdminByEmail);
router.get('/getalladmin', AdminController.getAllAdmins);
router.put('/adminupdate', AdminController.updateAdmin);
router.delete('/deletecustomer',UserController.deleteUser);
router.delete('/deleteadmin',AdminController.deleteAdmin);


module.exports = router;
