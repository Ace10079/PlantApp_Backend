const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/CustomerController');
const AdminController=require('../Controllers/AdminController')
const multer = require('multer');
const path = require("path");
const DiseaseController=require('../Controllers/DiseaseContoller')
const ImageController=require('../Controllers/ImageController')


 const storage = multer.diskStorage({
    destination: 'img',
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    },
});


router.post('/login', UserController.login);
const upload = multer({ storage: storage }).single('img');
router.post('/customer/register', UserController.registerUser);
router.post('/admin/register', AdminController.registerAdmin);
router.post('/disease/register',DiseaseController.registerDisease);
router.post('/imageregister', upload, ImageController.registerImage);
router.post('/validateAdmin',AdminController.validateAdmin);
router.put('/update/customer', UserController.updateUserProfile);
router.put('/update-image/customer', upload, UserController.updateUserImage);
router.put('/updateadmin', AdminController.updateAdmin);
router.put('/updatedisease',DiseaseController.updateDisease);
router.put('/adminupdate', AdminController.updateAdmin);
router.get('/getall/customer', UserController.getAllUsers);
router.get('/getall/disease', DiseaseController.getAllDisease);
router.get('/getall/admin', AdminController.getAllAdmins);
router.get('/getall/image', ImageController.getAllImage);
router.get('/getadminbyemail', AdminController.getAdminByEmail);
router.get('/getuserbyemail/customer', UserController.getUserByEmail);
router.get('/getdiseasebyname', DiseaseController.getDiseaseByName);
router.delete('/deletecustomer',UserController.deleteUser);
router.delete('/deleteadmin',AdminController.deleteAdmin);
router.delete('/deleteimage',ImageController.deleteImage);
router.delete('/deletedisease',DiseaseController.deleteDisease);


module.exports = router;
