const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/CustomerController');
const AdminController=require('../Controllers/AdminController')
const multer = require('multer');
const path = require("path");
const ImageController=require('../Controllers/ImageController')


const storage = multer.diskStorage({
    destination: 'img',
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    },
});
const upload = multer({ storage: storage }).single('img');
router.post('/customer',upload, UserController.registerUser);
router.post('/imageupload',upload, ImageController.registerImage);
router.post('/admin', AdminController.registerAdmin);
router.put('/update', UserController.updateUser);
router.put('/updateimg', UserController.updateImgUser);
router.put('/updateimg', UserController.updateImgUser);
router.get('/getuserbyemail', UserController.getUserByEmail);
router.get('/getall', UserController.getAllUsers);
router.put('/adminupdate', AdminController.updateAdmin);


module.exports = router;
