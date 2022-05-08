var express = require('express');
var router = express.Router();
const passport = require('passport');
var bodyParser = require("body-parser");
const verify=require('./verifyNGOtoken');
const NGO = require('../models/NGO');
 
router.use(bodyParser.json());

//UPDATE ngo deatils like name,mob,site,email
router.put("/:id",verify.verifyNGO , async(req,res,next)=>{
  if(req.body.password){
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
      ).toString()
  }

  try{
    const updatedNGO = await User.findByIdAndUpdate(req.params.id, {
      $set: req.body
    },{
      new:true
    });
    res.status(200).json(updatedNGO);
  }catch(err){
    res.status(500).json(err);
  }
});

//delete
router.delete("/:id",verify.verifyAdmin,async (req,res)=>{
  try{
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("NGO has been successfully deleted!");

  }catch(err){
    res.status(500).json(err);
  }
});

//get ngo by id
router.get("/find/:id",async (req,res)=>{
  try{
    const ngo = await NGO.findById(req.params.id);

    //hide password from displaying
    const {password, ...others} = ngo._doc;
    //user matches or user exist
    res.status(200).json({...others, accessToken});

    res.status(200).json(others);
  }catch(err){
    res.status(500).json(err);
  }
});

//get all Ngo's
router.get("/" ,async (req,res)=>{
  const query = req.query.new;
  try{
    const users = query 
    ? await NGO.find().sort({_id: -1}).limit(5) 
    : await NGO.find();
    res.status(200).json(users);
  }catch(err){
    res.status(500).json(err);
  }
});
//register NGO
router.post("/register",(req,res,next)=>{
    const NGOs = new NGO({
        email:req.body.email,
        mob:req.body.mob,
        username:req.body.username,
        site: req.body.site
    });
  NGO.register(NGOs,
    req.body.password, (err,user)=>{
      if(err){
        res.statusCode = 500;
        res.setHeader("Content-Type","application/json");
        res.json({err: err});
      }else{
        user.save((err,user)=>{
          if(err){
            res.statusCode = 500;
            res.setHeader("Content-Type","application/json");
            res.json({err: err});
            return;
          }
          passport.authenticate("ngolocal")(req,res,() => {
            res.statusCode = 200;
            res.setHeader("Content-Type","application/json");
            res.json({
              status:"Registration Successfully Done!",
              user: user,
              success: true
            });
          });
        });
      }
    });
});


module.exports = router;
