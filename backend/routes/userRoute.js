const express=require('express');
const router=express.Router();

const userController=require('../Controllers/userController')


router.post('/login',userController.getUserTasks);
router.post('/update-status/:id',userController.updateStatus);


module.exports={router};

