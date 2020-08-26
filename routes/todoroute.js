const express = require("express");

const router=express.Router();

const { addItem , deleteItem,updateItem,getAll} = require("../controllers/todo");
router.post('/addItem',addItem);
router.post('/deleteitem',deleteItem);
router.post('/updateitem',updateItem);
router.get('/get-all',getAll)


module.exports=router;