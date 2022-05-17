var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
const Donate = require("../models/Donate");
const verify = require("./verifyjsontoken");
const multer = require("multer");

router.use(bodyParser.json());

const storage = multer.diskStorage({
  destination: (req,file,cb)=>{
      cb(null,"../../akrigi/frontend/public/productImages/");;
  },
  filename: (req,file,cb)=>{
      cb(null,file.originalname);
  }
});
const fileFilter  = (req,file,cb)=>{
  if(!file.originalname.match(/\.(jpg|png|jpeg|gif|jfif)$/)){
      return cb(new Error("You can upload only image files"),false);
  }
  cb(null, true);
};

const upload  = multer({storage: storage, fileFilter: fileFilter});


// post the product
router.post("/",verify.verifyUser ,upload.array("images",6), (req,res,next)=>{

  const donation = new Donate({
    donor:req.user._id,
    name:req.body.name,
    desc:req.body.desc,
    category:req.body.category,
    ngo:req.body.ngo,
    images: req.files
  });

  donation.save()
    .then((product)=>{
        Donate.findOne({_id:req.user._id})
        .populate("donor");
        res.status(200).json({product, msg:"Donation Product successfully created!"});
    },(err)=>next(err))
    .catch(err => next(err))
});

//update products
router.put("/:id",verify.verifyUser, async(req,res)=>{

  try{
    const updatedProduct = await User.findByIdAndUpdate(req.params.id)
    .then((product)=>{
      if((post.donor._id).equals(req.user._id)){
        if(req.body.name) product.name= req.body.name;
        if(req.body.desc) product.content= req.body.desc;
        if(req.body.ngo) product.ngo= req.body.ngo;

        product.save()
        .then((product)=>{
            res.status(200).json({post: product, msg:"Donated Product successfully edited!"});
        },(err)=>next(err))
        .catch(err=> next(err));
    }else{
        var err = new Error("Only donor can change the post!");
            err.status = 403;
            return next(err);
    }},(err)=>next(err))
    .catch(err => next(err));
  }catch(err){
    res.status(500).json(err);
  }
});

//delete
router.delete("/:id",verify.verifyUser, async (req,res)=>{
  try{
    await Product.findByIdAndDelete(req.params.id)
    .then(product=>{
      if(!(product.author._id).equals(req.user._id)){
          var err = new Error("Only Donor can delete the donation!");
          err.status = 403;
          return next(err);
      }
      post.remove()
      res.status(200).json({status:"product Deleted!"});
  },err =>next(err))
  .catch(err =>next(err));
  }catch(err){
    res.status(500).json(err);
  }
});

//get product by id
router.get("/find/:id", async (req,res)=>{
  try{
    const product = await Donate.findById(req.params.id)
    .populate("donor");

    res.status(200).json(product);
  }catch(err){
    res.status(500).json(err);
  }
});

//get all products
router.get("/", async (req,res)=>{
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try{
    let products;

    if(qNew){
      products = await Product.find({}).populate("donor").sort({createdAt: -1}).limit(5);
    }else if(qCategory){
      products = await Product.find({
        categories:{
          $in:[qCategory],
        },
      }).populate("donor");
    }else {
      products = await Product.find({}).populate("donor");
    }
    res.status(200).json(products);
  }catch(err){
    res.status(500).json(err);
  }
});

module.exports = router;
