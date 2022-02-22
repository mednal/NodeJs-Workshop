var express = require('express');
const { redirect } = require('express/lib/response');
var router = express.Router();
var Contact=require('../model/Contact')
/* GET Contact listing. */



router.get('/', function(req, res, next) {
  Contact.find(function(err,data){
    if(err)throw err;
    res.render('GetAllContact.twig',{data});
    console.log(data);
  });
});


router.get('/add', function(req, res, next) {
 
  res.render('addContact.twig');
  });

  
router.post('/addAction', function(req, res, next) {
  console.log(req.body);
  var contact =new Contact (

      {FullName:req.body.fullname,
      Phone:req.body.phone}
  )
  contact.save();
  res.redirect('/contact/')
});






router.get('/update/:id',function(req,res,next){
  var id =req.params.id;
Contact.findById({_id:id},(err,data)=>{
if(err) throw err;
res.render("updateContact.twig",{data})

})
});


router.get('/delet/:id', function(req, res, next) {
  
  var id=req.params.id; 
   Contact.findByIdAndRemove({_id:id},(err)=>{
     if(err) throw err;
     res.redirect('/contact')
   })

});

router.post('/updateC/:id', function(req, res, next) {
  var id =req.params.id;
  var data ={
      FullName:req.body.FullName,
      Phone:req.body.phone
  }
  Contact.findByIdAndUpdate({_id:id},(data,err)=>{
      if(err) throw err;
      res.redirect("/contact/");
  })
  
});

module.exports = router;
