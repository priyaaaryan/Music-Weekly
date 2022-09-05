const router=require("express").Router();


router.get("/",(req,res)=>{
  res.render("homepage");
})

router.get("/blog",(req,res)=>{
  res.render("blog");
})

router.get("/musicians",(req,res)=>{
  res.render("musicians");
})

router.get("/classroom",(req,res)=>{
  res.render("classroom");
})

module.exports = router;
