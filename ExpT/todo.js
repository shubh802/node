/**
 * Created by dmadmin on 9/4/2015.
 */

var express= require('express');

var router=express.Router();

var todoItems=[
    {id:1,desc:'foo'},
    {id:2,desc:'bar'},
    {id:3,desc:'baz'}
];

router.get('/',function(req,res){

    //  res.send("Hello, express !!");
    //  res.send(todoItems);
    res.render('index',{
        items:todoItems,
        title:"My App"
    });
});

router.post('/add',function(req,res){
    var newItem= req.body.newItem;
    console.log(newItem);
    todoItems.push({
        id:todoItems.length+1,
        desc: newItem
    });

    res.redirect("/");
});

module.exports = router;

