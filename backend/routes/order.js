var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
const Order = require("../models/Order");
const verify=require('./verifyjsontoken');
router.use(bodyParser.json());

// create the order
router.post("/",verify.verifyUser ,async (req,res)=>{
  const newOrder = new Order(req.body);

  try{
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  }catch(err){
    res.status(500).json(err);
  }
});

//update order
router.put("/:id",verify.verifyUser, async(req,res)=>{

  try{
    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, {
      $set: req.body
    },{
      new:true
    });
    res.status(200).json(updatedOrder);
  }catch(err){
    res.status(500).json(err);
  }
});

//delete
router.delete("/:id",verify.verifyUser, async (req,res)=>{
  try{
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("Order has been successfully deleted!");
  }catch(err){
    res.status(500).json(err);
  }
});

//get user order
router.get("/find/:userId",verify.verifyUser, async (req,res)=>{
  try{
    const orders = await Order.find({userId: req.params.userId});

    res.status(200).json(orders);
  }catch(err){
    res.status(500).json(err);
  }
});

//get all orders 
router.get("/",verify.verifyAdmin, async (req,res)=>{
  try{
      const orders = await Order.find();
      res.status(200).json(orders);
  }catch(err){
    res.status(500).json(err);
  }
});



module.exports = router;
