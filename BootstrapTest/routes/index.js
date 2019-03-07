var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/regform',function(req,res){

  var db  = req.db;
  var collection=db.get('users');

  //  var frstname=req.body.firstname;
    var efname=new Buffer(req.body.firstname).toString("base64");
    console.log(efname);

    collection.insert({
            fname : req.body.firstname,
            lname : req.body.lastname,
            email : req.body.Email
  },function(err,doc){
          if(err){
            console.log("Error in saving data:  "+err);
            res.json(err);
          }
          else
            console.log("Successfully inserted data");
      });

});

module.exports = router;
