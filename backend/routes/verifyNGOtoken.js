const passport = require('passport');
const LocalStatergy = require("passport-local").Strategy;
const NGO = require('../models/NGO');
const JwtStatergy = require("passport-jwt").Strategy;
const extractJwt = require("passport-jwt").ExtractJwt;
const jwt = require('jsonwebtoken');

exports.ngolocal = passport.use("ngolocal",new LocalStatergy(NGO.authenticate()));
passport.serializeUser(NGO.serializeUser());
passport.deserializeUser(NGO.deserializeUser());


exports.getToken = (user)=>{
    return jwt.sign(user,process.env.JWT_SEC,{
        expiresIn: '7d'
    });
};

const opts = {};
opts.jwtFromRequest = extractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SEC;

exports.jwtPassport = passport.use("NgoJWT",new JwtStatergy(opts,
    (jwtPayload, done)=>{
        console.log(jwtPayload);
        NGO.findOne({_id:jwtPayload._id},(err,user)=>{
            if(err){
                return done(err,false);
            }else if(user){
                return done(null,user);
            }else{
                return done(null,false);
            }
        });
    }));

exports.verifyNGO = passport.authenticate("NgoJWT",{session: false});


exports.verifyAdmin = function(req,res,next){
    if(req.user.admin){
        next();
    }else{
        var err = new Error("You are not authorized to perform this operation");
        err.status = 403;
        return next(err);
    }
}