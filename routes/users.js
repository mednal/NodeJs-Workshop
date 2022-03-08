var express = require('express');
var router = express.Router();
var User=require('../model/User');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/adduser', function(req, res, next) {
  var user =new User(

      {
      Email:"ww",
      Password:"ww"

    }
)
  user.save()

 
});



router.get('/goauth', function(req, res, next) {
  res.render('auth.twig')
});


router.post('/login',function(req,res){
  const email = req.body.email;
  const password = req.body.password;
  User.find(function(err,data){
if(err)throw err;
console.log(data);
data.forEach(data=>{

if(data.Email==email&&data.Password==password){
  res.redirect("login.html")
  console.log("aaaaaaaaaaa")
}
else{
  res.redirect('/')
}

})


  })
  


  
res.render('');
})

module.exports = router;
