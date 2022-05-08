var express = require('express');
var bodyParser = require("body-parser");
const passport = require('passport');
var router = express.Router();
const User = require("../models/User");
const verify = require('./verifyjsontoken');

router.use(bodyParser.json());

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//Register the user router

router.post("/register",(req,res,next)=>{
    const Users = new User({
        email:req.body.email,
        username:req.body.username,
        firstName:req.body.firstName,
        lastName: req.body.lastName
    });
  User.register(Users,
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
          passport.authenticate("userlocal")(req,res,() => {
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

//login the existing user
router.post("/login",(req,res,next)=>{
    
  passport.authenticate("userlocal",(err,user,info)=>{
    if(err)
      return next(err);
    if(!user){
      res.statusCode = 401;
      res.setHeader("Content-Type","application/json");
      res.json({
        success: false,
        status: "Login Unsuccessfull!",
        err: info
      });
    }req.login(user,(err)=>{
      if(err){
        res.statusCode = 401;
        res.setHeader("Content-Type","application/json");
        res.json({
          success: false,
          status: "Login Unsuccessfull!",
          err:"Could not login user!"
        });
      }
      var token = verify.getToken({_id: user._id,username: user.username});
      res.statusCode = 200;
        res.setHeader("Content-Type","application/json");
        res.json({
          success: true,
          status: "Login Successfull!",
          token: token,
          user:user.username
        });
    });
  })(req,res,next);
});

//check jwt token

router.get("/checkJwt",(req,res,next)=>{
  verify.jwtPassport.authenticate("UserJWT",{session:false},(err,user,info)=>{
    if(err) return next(err);
    if(!user){
      res.statusCode = 401;
        res.setHeader("Content-Type","application/json");
        res.json({
          success: false,
          status: "Token invalid!",
          err: info
        });
    }
    else{
      res.statusCode = 200;
        res.setHeader("Content-Type","application/json");
        res.json({
          success: true,
          status: "token valid!",
          user: user
        });
      }
  })(req,res);
});
module.exports = router;
