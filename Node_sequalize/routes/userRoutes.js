const {addNewUser, getUser,forgotPassword,deleteaccount,}=require("../controllers/usercontroller")
const user = require("../models/user")

const userrouter = require('express').Router()

userrouter.post("/addUser",addNewUser)
userrouter.post("/getUser",getUser)
userrouter.post("/forgotPassword",forgotPassword);
//userrouter.post("/delete",delete);
userrouter.post("/delete",deleteaccount);
module.exports=userrouter;