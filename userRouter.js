const express = require("express"); 
const { createUser } = require("../controllers/userController");  
const Router = express.Router(); 
Router.post("/createUser", createUser); 
module.exports = Router; 
