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




router.post('/search', function (req, res, next) {
  console.log("FullName" + req.body.Search)
  Contact.find(function (err, data1) {
      if (err) throw err;
      let data = [];
      if (req.body.Search == "") {
          res.redirect('/contact');
      } else {
          data1.forEach(element => {
              if (req.body.Search == element.FullName) {

                  data.push(element)
                  console.log("data est : " + data)
              }

          });
      }
      if (data == null) {
          res.render('GetAllContact.twig', { data1 });
      } else {
          res.render('GetAllContact.twig', { data });
      }
     
  });
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
