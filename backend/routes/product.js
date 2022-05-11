var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
const Product = require("../models/Product");
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
  if(!file.originalname.match(/\.(jpg|png|jpeg|gif)$/)){
      return cb(new Error("You can upload only image files"),false);
  }
  cb(null, true);
};

const upload  = multer({storage: storage, fileFilter: fileFilter});


// post the product
router.post("/",verify.verifyUser ,upload.array("images",6), (req,res,next)=>{

  const product = new Product({
    seller:req.user._id,
    name:req.body.name,
    desc:req.body.desc,
    category:req.body.category,
    price:req.body.price,
    images: req.files
  });

  product.save()
    .then((product)=>{
        Product.findOne({_id:req.user._id})
        .populate("seller");
        res.status(200).json({product, msg:"Product successfully created!"});
    },(err)=>next(err))
    .catch(err => next(err))
});

//update products
router.put("/:id",verify.verifyUser, async(req,res)=>{

  try{
    const updatedProduct = await User.findByIdAndUpdate(req.params.id)
    .then((product)=>{
      if((post.seller._id).equals(req.user._id)){
        if(req.body.name) product.name= req.body.name;
        if(req.body.desc) product.content= req.body.desc;
        if(req.body.price) product.price= req.body.price;

        product.save()
        .then((product)=>{
            res.status(200).json({post: post, msg:"Product successfully edited!"});
        },(err)=>next(err))
        .catch(err=> next(err));
    }else{
        var err = new Error("Only seller can change the post!");
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
          var err = new Error("Only seller can delete the product!");
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
    const product = await Product.findById(req.params.id)
    .populate("seller");

    res.status(200).json(product);
  }catch(err){
    res.status(500).json(err);
  }
});

//get all products
router.get("/", async (req,res)=>{
  const qPrice = req.query.price;
  const qCategory = req.query.category;
  try{
    let products;

    if(qPrice){
      products = await Product.find({
        price:{$lt:qPrice}
      }).populate("seller").sort({createdAt: -1}).limit(5);
    }else if(qCategory){
      products = await Product.find({
        category:qCategory,
      }).populate("seller");
    }else {
      products = await Product.find({}).populate("seller");
    }
    res.status(200).json(products);
  }catch(err){
    res.status(500).json(err);
  }
});

module.exports = router;
