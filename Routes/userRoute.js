const express = require("express");
const userController=require('../Controllers/userController')
const router = express.Router();

router
.route("/userRegister").post(userController.postUser);

module.exports=router;
