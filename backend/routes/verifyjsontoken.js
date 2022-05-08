const passport = require('passport');
const LocalStatergy = require("passport-local").Strategy;
const User = require('../models/User');
const JwtStatergy = require("passport-jwt").Strategy;
const extractJwt = require("passport-jwt").ExtractJwt;
const jwt = require('jsonwebtoken');

exports.userlocal = passport.use("userlocal",new LocalStatergy({usernameField:'email'},User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


exports.getToken = (user)=>{
    return jwt.sign(user,process.env.JWT_SEC,{
        expiresIn: '7d'
    });
};

const opts = {};
opts.jwtFromRequest = extractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SEC;

exports.jwtPassport = passport.use("UserJWT",new JwtStatergy(opts,
    (jwtPayload, done)=>{
        console.log(jwtPayload);
        User.findOne({_id:jwtPayload._id},(err,user)=>{
            if(err){
                return done(err,false);
            }else if(user){
                return done(null,user);
            }else{
                return done(null,false);
            }
        });
    }));

exports.verifyUser = passport.authenticate("UserJWT",{session: false});

exports.verifyOrdinaryUser = function(req,res,next){
    var authHeaders = req.headers["authorization"];
    if(authHeaders.split("")[0]==="Bearer")
        var token = authHeaders.split("")[1];

    if(token){
        jwt.verify(token,process.env.JWT_SEC, (err,decoded)=>{
            if(err){
                var err = new Error("You are not authorized");
                err.status = 401;
                return next(err);
            }else {
                User.findOne({_id:decoded._id},(err,user)=>{
                    if(err) next(err);
                    else{
                        req.user = user;
                        next();
                    }
                });
            }
        })
    }else{
        var err = new Error("No token available!");
        err.status = 403;
        return next(err);
    }
};

exports.verifyAdmin = function(req,res,next){
    if(req.user.isAdmin){
        next();
    }else{
        var err = new Error("You are not authorized to perform this operation");
        err.status = 403;
        return next(err);
    }
}